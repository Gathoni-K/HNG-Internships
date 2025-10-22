**Project setup**

-This is a multi-page website, and the folder structure is like so:
        components - hold reusable UI components, things like buttons, modals, inputs.
                   - basically any component that will be used in any other page.
        pages - holds the individual pages of a website.
              - page-specific components within a single folder, so that it looks something like this:
                src/
                    ├── components/          # Reusable across multiple pages
                    │   ├── UI/              # components defining overall structure and skeleton of our pages, things like header, nav bar
                    │   └── layout/
                    ├── pages/
                    │   ├── Home/
                    │   │   ├── HomePage.jsx
                    │   │   ├── HeroSection.jsx
                    │   │   └── FeaturedProducts.jsx
                    │   ├── Product/
                    │   │   ├── ProductPage.jsx
                    │   │   ├── ProductGallery.jsx
                    │   │   └── ProductDetails.jsx
                    │   └── Checkout/
                    │       ├── CheckoutPage.jsx
                    │       ├── OrderSummary.jsx
                    │       └── PaymentForm.jsx 


-What components will be in our components folder: submit button, navbar, 

**Dependencies**
-As this is a multi-page website, we will need to use a React router.
-Use the command below to handle that:
                ' npm i react-router-dom --save styled-components '


**Making our website multi-paged**
-There are several patterns of making a button act as a link:
1.Link styled as Button. (most common and highly recommended.)
        '
        import { Link } from 'react-router-dom';

        <Link to="/pageName" className={styles.button}>
        Contact Me
        </Link>
        '
-Used for internal navigation within my React app.
-Simple buttons that just need to link other pages.

2.Button with useNavigate Hook.
          '
          import { useNavigate } from 'react-router-dom';

          function Button() {
            const navigate = useNavigate();
          }
          return (
            <button onClick={() =>navigate('/contact')}>
            Contact
            </button>
          )
          '
-Used for navigation that needs conditional logic first.
-After form submissions, API calls or validation.
-When one needs to programmatically control navigation.

-Use method one if it is a direct link and method 2 if logic is first needed.

**Routers**
-JS library allowing users to navigate between different pages or sections without refreshing the entire page.
-Use BrowserRouter in our website.

**Real-time form validation**
-Things to do: prevent default form submission.
-Real-time validation:
Validation flow:
1.User types, updates form data state.
2.Data changes, run validation rules.
3.Validation results, update error state.
4.Error state, show or hide error messages.
5.All fields valid, enable submit button.

**States needed**
1.Form data state - stores current input values, updates on every change.
2.Validation state - stores error messages for each field.
3.Form status state - checks if form is valid for submission, will control disabling and enabling our button.