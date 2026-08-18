# Structural analysis of SBN/CENE's course syllabi

Basis: 257 active syllabi whose *Course offered by* field names the Department of Civil, Environmental and Natural Resources Engineering (SBN/CENE). Retrieved 2026-08-17 from LTU's official syllabus archive (epok.ltu.se), latest admission term. Converted to Markdown in this folder; the Swedish originals are in `../kursplaner SBN/`.

The quantitative analysis below was run on the **Swedish** versions, which the syllabi themselves designate as authoritative ("The Swedish version has interpretative precedence in the event of a conflict"). Section names are given here in their English form as they appear in the English syllabi.

For comparison: LTU has 1,508 active syllabi in total. The distribution across departments is ETKS 432, SRT 337, HLT 275, SBN 257, TVM 195, other 12. SBN thus accounts for roughly one sixth of LTU's course portfolio.

## 1. The document template

All syllabi follow the same fixed template. Sections always appear in the same order, and the share of syllabi containing each section is:

| Section | Share |
|---|---|
| Entry requirements | 100 % |
| Course Aim | 100 % |
| Contents | 100 % |
| Realization | 100 % |
| Examination | 100 % |
| Course offered by | 100 % |
| Syllabus established | 100 % |
| Selection | 96 % |
| Modules | 95 % |
| Unauthorized aids during exams and assessments | 90 % |
| Last revised | 81 % |
| Study guidance | 72 % |
| Main field of study | 47 % |
| Overlap | 38 % |
| Remarks | 31 % |
| Literature | 9 % |
| Examiner | 9 % |
| Transitional provisions | 1 % |

In addition, every syllabus opens with a metadata table: education level, specialisation code, grade scale, subject and subject group (SCB).

The syllabi are short. The median is 617 words for the whole document, range 245–1,290 words. Broken down by the load-bearing sections (median word count):

- Course Aim: 94
- Examination: 78
- Realization: 67
- Contents: 43
- Entry requirements: 16

Contents – what is actually to be taught – is thus the shortest of the four central sections.

## 2. How much is boilerplate?

A substantial share of every syllabus is boilerplate repeated verbatim:

- 99 % contain the standard sentence "Each course occasion's language and form are stated and appear on the course page…"
- 99 % contain the standard paragraph on special educational support in the examination section
- 90 % contain the standard paragraph on unauthorized aids
- 72 % contain the standard paragraph on study guidance in Canvas

Measured in words, those four standard paragraphs make up 35 % of a median syllabus. The course-specific substance amounts to roughly 340 words.

Text is also reused between courses beyond the boilerplate: 60 syllabi have a *Realization* section that is word-for-word identical to at least one other syllabus, 53 share an examination section and 47 share course contents.

## 3. The learning outcomes

This is where the greatest structural variation sits – and the most interesting.

**The three-part structure from the Higher Education Ordinance is applied inconsistently.** Only 16 % of the syllabi use all three headings *Knowledge and understanding*, *Competence and skills* and *Judgement and approach*. Individual headings appear in 20–27 %. The majority therefore write outcomes as an undifferentiated list or as running prose.

**Almost half have no bulleted outcomes at all.** 107 of 257 syllabi (42 %) phrase the learning outcomes as continuous prose without a bullet list. Among those that do bullet, the median is 4 outcomes per course (mean 4.2, max 18).

**The verb distribution leans towards the lower end of the taxonomy.** The most common opening verbs in the learning outcomes (Swedish originals, English gloss in brackets):

| Verb | Count |
|---|---|
| beskriva (describe) | 70 |
| tillämpa (apply) | 56 |
| förklara (explain) | 44 |
| planera (plan) | 37 |
| formulera (formulate) | 32 |
| bedöma (assess) | 31 |
| utforma (design) | 26 |
| välja (select) | 26 |
| beräkna (calculate) | 24 |
| identifiera (identify) | 17 |
| analysera (analyse) | 17 |
| förstå (understand) | 16 |
| redogöra (account for) | 16 |

*Describe*, *explain*, *account for* and *understand* – reproductive verbs – together account for more outcomes than *analyse*, *assess*, *design* and *select* combined. That is precisely the kind of outcome a language model can satisfy without the student having learned anything.

## 4. Examination

Keywords in the examination section (share of 257 syllabi):

| Form | Share |
|---|---|
| Oral presentation | 50 % |
| Submitted assignment | 35 % |
| Exam (any form) | 32 % |
| Project work | 32 % |
| Seminar | 25 % |
| Written exam (explicitly) | 22 % |
| Written report | 18 % |
| Laboratory work | 18 % |
| Quiz/short test | 17 % |
| Opposition/peer review | 14 % |
| Group work | 14 % |
| Field exercise/excursion | 13 % |
| Mandatory attendance | 7 % |
| Take-home exam | 0 % |
| Portfolio | 0 % |

Cross-tabulating "exam-like components" against "components requiring physical presence or orality" gives:

| Category | Count | Share |
|---|---|---|
| No exam, but live components (oral/seminar/lab/field) | 125 | 49 % |
| Exam + live components | 72 | 28 % |
| Exam, no live components | 22 | 9 % |
| Neither exam nor live components | 38 | 15 % |

The 38 courses in the last category are assessed solely through submitted texts and calculations, without any invigilated or oral component. That is the group where generative AI already makes assessment hard to trust. Examples: F0019B History of Architecture, K0004B Concrete Technology, K0018B International Construction, G0001B Road and Railroad Design with Computers, plus the entire D70 series on industrial AI and asset management, and the L00 series on GIS and programming.

At the same time it is worth noting that 77 % of the courses already have some oral, laboratory-based or field-based component. SBN is thus structurally better positioned than a typical humanities or social science department – assessment is largely already anchored in something that happens in a room.

**No syllabus mentions AI in its examination section.** Eleven syllabi mention AI or machine learning at all, and all of them do so as *subject matter* (D0023B, D7001B, D7015–D7023B, O7028K, P7006B) – not as something affecting how students are assessed. The standard paragraph on unauthorized aids, present in 90 % of the syllabi, was written before generative AI and defines unauthorized aids negatively: anything the teacher has not specified in advance as permitted. Formally, that makes AI use prohibited in all those courses unless the teacher actively says otherwise – which is presumably not what anyone intended, and hardly what happens in practice.

## 5. Teaching formats

Keywords in *Realization*:

| Format | Share |
|---|---|
| Lectures | 61 % |
| Project work | 55 % |
| Group work | 45 % |
| Exercises | 38 % |
| Laboratory work | 25 % |
| Seminars | 25 % |
| Study visits/field exercises | 19 % |
| Supervision | 15 % |
| Distance/online | 12 % |
| Guest lecturers | 2 % |
| Case/PBL | 0.4 % |

Project and group work are almost as common as lectures. That is a pedagogical profile which holds up relatively well against AI, but which also makes assessing individual performance harder.

## 6. Modules and grade scales

244 syllabi have a module table. Median 2 modules per course (mean 2.5, max 9). Distribution: 1 module 51 courses, 2 modules 95, 3 modules 42, 4 modules 39, 5 or more 16.

Most common module names (translated from the Swedish): Submitted assignments (55), Exam (43), Oral presentation (28), Written exam (24), Approved report (23), Project work (22).

Grade scales: 64 % use GU345 (graded scale), 33 % pure pass/fail (U G# or UG), 3 % U/G/VG. The graded scale is more common at second cycle (95 of 141) than at first cycle (69 of 115).

## 7. Level, credits and subjects

- Level: 141 second cycle, 115 first cycle, 1 preparatory level.
- Credit size: 7.5 credits dominates completely (201 courses). Beyond that 30 credits (27, in practice degree projects), 15 credits (23), 3 credits (4), 1.5 credits (2).
- Specialisation codes: A1N 91, G1F 52, G1N 32, A1F 28, A2E 20, G2F 16, G2E 6, G1E 2, A1E 1; 9 syllabi have no code.

Subject distribution (the *Subject* field is left in Swedish even in the English syllabi, so the names are given as they appear): Väg- och vattenbyggnad 36, Underhållsteknik 32, Geovetenskap 20, Arkitektur 19, Brandteknik 14, Byggproduktion 13, Geoteknik 12, Berg- och mineralteknik 12, Miljöteknik 11, Konstruktionsteknik 11, Kemiteknik 10, Geografisk informationsteknologi 9, VA-teknik 9, Mineralteknik 8, Processmetallurgi 8, Kemi 7, Malmgeologi 6, Kemisk teknologi 5, Geofysik 4, Kemisk apparatteknik 3, plus six subjects with 1–2 courses each.

## 8. Revision patterns

Decision date for the syllabus in force:

- 2007–2020: 43 syllabi (17 %)
- 2021: 70 (27 %)
- 2022: 40
- 2023: 26
- 2024: 26
- 2025: 28
- 2026: 24

The 2021 peak is a central round in which most syllabi were revised at the same time. Since then the rate has been 25–30 revised syllabi per year, i.e. around 10 % of the stock. 34 syllabi (13 %) have not been revised since before 2020 – they were written in a world without usable generative AI, and at the current rate they will not be touched for years. 163 syllabi (63 %) are valid "until further notice" with no end date.

## 9. Conclusions for the discussion on site

1. **The template forces you to state assessment, but not to reflect on it.** The syllabus requires you to fill in *how* assessment happens, but there is no field for *why that particular form* or *what the student is assumed to do unaided*. That is where an AI adaptation would have to be built in.
2. **The rules already say no to AI – without anyone having decided so.** The standard paragraph on unauthorized aids makes AI prohibited by default in 231 syllabi. It is a silent policy that nobody owns and nobody follows up.
3. **The genuinely exposed courses are few and identifiable.** 38 courses have no invigilated or oral components at all. That is a manageable list to work through, not a systemic failure.
4. **The learning outcomes are the weakest link.** 42 % have no bulleted outcomes, 84 % do not follow the Ordinance's three-part structure, and the most common verbs are reproductive. Vague outcomes make it impossible to judge which components AI actually undermines.
5. **The syllabus is the wrong instrument for rapid AI adaptation.** At 25–30 revisions per year it would take a decade to rewrite the stock. What can be changed quickly is the course memo, the study guidance and assessment practice – not the syllabus. The question for the department therefore becomes: what *must* be in the syllabus, and what should be handled one level down?
