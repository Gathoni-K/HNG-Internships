**Project description**
-Is a simple website with only 2 pages; Contact and About pages.

-The contact page will have the email, name and subject and message fields.
-Will also have real-time error handling and success confirmation on submitting the form.
-The about page will be a brief history, will have my bio, goals, extra thoughts and areas I lack confidence in.

**Project requirements**
Validation rules:

    All fields required.
    Email must be valid (name@example.com).
    Message must be at least 10 characters.
    On success, show a confirmation message.

Accessibility:

    All inputs must have <label>s linked with for.
    Error messages must be tied to inputs with aria-describedby.
    Entire form must be keyboard accessible.


**Criteria required for successful submission**
Contact Us Page

    All required fields exist and use correct data-testids.
    Validation prevents invalid submissions.
    Success message only shows after valid submission.

About Me Page

    All required sections exist with correct data-testids.
    Semantic HTML used (main, section, ul, p, h2).

General

    Semantic HTML throughout.
    Accessible (labels, alt text, ARIA associations).
    Fully responsive across mobile, tablet, desktop.
    Keyboard navigable.
    Code is modular, readable, and consistent.

**New things I learned.**
1.How routers work.
2.Correct folder structure of a multi-paged website in React.
3.The layout component, wrapper component handling common structure/shared elements across multiple pages e.g. Header, NavBars.
