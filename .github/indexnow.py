"""Skickar ändrade sidor i senaste committen till IndexNow (Bing m.fl.)."""
import json, os, subprocess, sys, urllib.request

HOST = "falkai.org"
KEY = os.environ["INDEXNOW_KEY"]
SKIP_FILES = {"robots.txt", "BingSiteAuth.xml", f"{KEY}.txt"}

if len(sys.argv) > 1:  # manuell körning: URL:er som argument
    urls = sys.argv[1:]
else:
    files = subprocess.run(
        ["git", "diff", "--name-only", "--diff-filter=AM", "HEAD~1", "HEAD"],
        capture_output=True, text=True, check=True).stdout.split("\n")
    urls = []
    for f in files:
        if not f or f.startswith(("p/", ".github/")) or f in SKIP_FILES:
            continue
        if not f.endswith((".html", ".md", ".txt", ".xml")):
            continue
        path = "/" + f
        if path.endswith("/index.html"):
            path = path[: -len("index.html")]
        urls.append(f"https://{HOST}{path}")

print("URL:er:", urls)
if not urls:
    sys.exit("Inget att pinga.")
body = json.dumps({"host": HOST, "key": KEY,
                   "keyLocation": f"https://{HOST}/{KEY}.txt",
                   "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", data=body,
                             headers={"Content-Type": "application/json; charset=utf-8"})
print("IndexNow svarade:", urllib.request.urlopen(req).status)
