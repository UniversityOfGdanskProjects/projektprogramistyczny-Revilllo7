# Opis projektu i wymagania / Project description and requirements
[english version](#project-description-and-requirements--opis-projektu-i-wymagania)

> Autor: Oliver Gruba
> Grupa: 4
> Data rozpoczęcia: 01/02/2025
> Data ukończenia: 06/02/2025

---

## Temat: Landing Page
### Krótki opis projektu od prowadzącego:

Aplikacja typu landing page to dedykowana strona internetowa zaprojektowana z myślą o efektywnym przedstawieniu kluczowych informacji o produkcie, usłudze lub firmie. Celem jest maksymalizacja konwersji użytkowników poprzez skupienie ich uwagi na jednym, jasno określonym działaniu, takim jak zapis do newslettera, pobranie materiałów czy kontakt z firmą. Strona zawiera szereg elementów, takich jak przyciągająca uwagę sekcja główna (hero section), informacje o firmie, szczegóły oferty, opinie klientów, galeria lub studia przypadków, formularz kontaktowy oraz stopka z dodatkowymi informacjami. Jest zaprojektowana z myślą o responsywności, aby zapewnić optymalne doświadczenia użytkownikom na różnych urządzeniach, oraz jest zoptymalizowana pod kątem SEO, by zwiększyć jej widoczność w wynikach wyszukiwania.														


---
## Wymagania funkcjonalne
| Wymóg | Opis funkcjonalności | % funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:-----------------:|:------------------------:|:-----------------------------:|:--------:|-------|
| Nagłówek | Zawiera logo, hasło i menu nawigacyjne dla łatwego dostępu do różnych sekcji strony. | 2.00% | 0.4 | 0.4 | ✅ |  |
| Hero Section | Obraz/animacja, krótkie przesłanie marketingowe, wyraźny CTA (np. formularz zapisu lub przycisk pobrania). | 2.00% | 0.4 | 0.4 | ✅ |  |
| O nas | Informacje o firmie, jej misji, wartościach, opcjonalnie krótkie biografie zespołu. | 2.00% | 0.4 | 0.4 | ✅ |  |
| Funkcje i korzyści | Lista funkcji produktu/usługi z ikonami lub grafikami. | 3.00% | 0.6 | 0.6 | ✅ |  |
| Opinie klientów | Opinie klientów ze zdjęciami/logotypami dla większej wiarygodności. | 3.00% | 0.6 | 0.6 | ✅ |  |
| Galeria lub Case Studies | Przykłady prac, projekty lub case studies ilustrujące doświadczenie firmy. | 5.00% | 1 | 1 | ✅ |  |
| Formularz kontaktowy | Pola: imię, e-mail, wiadomość, opcjonalnie numer telefonu. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Stopka | Informacje kontaktowe, linki do mediów społecznościowych, mapa witryny, informacje prawne. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Walidacja danych | System walidacji danych wejściowych użytkownika. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Integracja z mediami społecznościowymi | Możliwość udostępniania treści na platformach społecznościowych. | 4.00% | 0.8 | 0.8 | ✅ |  |
| Dostępność | ARIA, kontrast kolorów, czytelność tekstu dla osób z niepełnosprawnościami. | 4.00% | 0.8 | 0.8 | ✅ |  |
| Wielojęzyczność | Obsługa wielu języków i lokalizacji. | 4.00% | 0.8 | 0 | ❌ | Nie spróbowano |
| Personalizacja | Dostosowanie treści do preferencji użytkownika. | 3.00% | 0.8 | 0.8 | ✅ |  |

---
## Wymagania wizualne
| Wymóg | Opis funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| Zaawansowane selektory CSS | Efektywne stylowanie za pomocą selektorów CSS. | 0.4 | 0.4 | ✅ |  |
| Pseudoklasy | Definiowanie stylów dla różnych stanów elementów. | 0.2 | 0.2 | ✅ |  |
| Framework CSS | Integracja i wykorzystanie (np. Bootstrap, Tailwind CSS) do szybkiego prototypowania i spójności UI. | 0.4 | 0 | ❌ | Nie użyto frameworku |
| Flexbox | Efektywne układanie, wyrównywanie i dystrybucja przestrzeni między elementami interfejsu. | 0.4 | 0.4 | ✅ |  |
| Grid Layout | Tworzenie złożonych układów strony i aplikacji, zapewniających responsywność i elastyczność. | 0.4 | 0.4 | ✅ |  |
| Responsywny design | Dostosowanie aplikacji do różnych rozmiarów ekranów i urządzeń. | 0.6 | 0.6 | ✅ |  |
| Komponenty React | Wykorzystanie wbudowanych komponentów React lub z bibliotek komponentów (np. Material-UI, Ant Design). | 0.6 | 0 | ❌ | Nie użyto bibliotek |
| Wizualny wygląd aplikacji | Ogólny wygląd i estetyka aplikacji. | 1 | 1 | ✅ |  |

---
## Wymagania techniczne
| Wymóg | Opis funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| JSX i stany | Użycie JSX i stanów React. | 0.2 | 0.2 | ✅ |  |
| useEffect i useLayoutEffect | Wykorzystanie hooków do zarządzania efektami ubocznymi. | 0.2 | 0.2 | ✅ |  |
| useMemo | Optymalizacja renderowania komponentów. | 0.4 | 0.4 | ✅ |  |
| useRef | Przechowywanie odniesień do elementów DOM lub wartości między renderami. | 0.2 | 0.2 | ✅ |  |
| useReducer | Alternatywne zarządzanie stanem komponentu. | 0.6 | 0.6 | ✅ |  |
| useContext | Zarządzanie stanem globalnym w aplikacji. | 0.4 | 0 | ❌ | Nie wykorzysatno useCOntext |
| useCallback | Optymalizacja funkcji zależnych od zależności. | 0.4 | 0.4 | ✅ |  |
| Pobieranie danych z API | Wykorzystanie fetch lub biblioteki do pobierania danych. | 0.6 | 0.6 | ✅ |  |
| Własne Hooki | Zdefiniowanie i użycie własnych Hooków w aplikacji. | 0.6 | 0.6 | ✅ |  |
| Formik | Zarządzanie formularzami za pomocą Formik. | 0.6 | 0.6 | ✅ |  |
| Uniwersalne komponenty | Tworzenie wielokrotnego użytku komponentów UI. | 0.6 | 0.6 | ✅ |  |
| Routing | Implementacja routingu w aplikacji. | 0.6 | 0.6 | ✅ |  |
| Styl i podział kodu | Stosowanie promise, programowania funkcyjnego itp. | 0.6 | 0.6 | ✅ |  |

---
## Punkty dodatkowe
| Opis | Maksymalna ilość punktów do zdobycia | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|------|:------------------------------------:|:-----------------------------:|:--------:|-------|
| Użycie TypeScript. | 2 | 0 | ❌ | Nie użyto TypeScript |
| Leniwe ładowanie komponentów z React.lazy i Suspense. | 1 | 1 | ✅ | |
| Przetestowanie aplikacji. | 1 | 0 | ❌ | Nie przetestowano aplikacji, tylko dane klienta |
| Zarządzanie stanem aplikacji (Context, Redux, MobX) | 2 | 0 | ❌ | Nie użyto |
| SWR (Stale-While-Revalidate) lub React Query dla zarządzania danymi asynchronicznymi.  | 2 | 0 | ❌ | Nie użyto |
| Deploy aplikacji na przykład w serwisie Heroku/Netlify/Firebase. | 1 | 1 | ✅ | |
| Inne rzeczy, nie pokazane na wykładzie/zajęciach. | 2 | X | ✅/❌ | |

---
## Wymagania obowiazkowe (punkty ujemne za brak)
| Opis | Punkty utracone przez studenta | Uwagi |
|------|:------------------------------:|-------|
| Historia projektu w repozytorium. | 0 |  |
| Ocena opisu commitów. | 0 | |
| Stan repozytorium.  | 0 | |

---
# Project description and requirements / Opis projektu i wymagania
[wersja po polsku](#opis-projektu-i-wymagania--project-description-and-requirements)

> Author: Oliver Gruba
> Group: 4
> Start date: 01/02/2025
> Finish date: 06/02/2025

---

## Theme: Landing page
### Short project description from the teacher:

A landing page application is a dedicated website designed to effectively present key information about a product, service or company. The goal is to maximize user conversions by focusing their attention on one, clearly defined action, such as subscribing to the newsletter, downloading materials or contacting the company. The website contains a number of elements, such as an eye-catching main section (hero section), company information, offer details, customer reviews, gallery or case studies, contact form and a footer with additional information. It is designed with responsiveness in mind to provide an optimal user experience across devices, and is SEO optimized to increase its visibility in search results.


---
## Functional requirements
| Requirement	| Functionality Description	| % of Functionality	|Maximum Points	| Points Earned by Student	| Completed	| Notes |
|-------|----------------------|:-----------------:|:------------------------:|:-----------------------------:|:--------:|-------|
| Header | Contains a logo, slogan, and navigation menu for easy access to different sections of the website. | 2.00% | 0.4 | 0.4 | ✅ |  |
| Hero Section | Image/animation, short marketing message, clear CTA (e.g., sign-up form or download button). | 2.00% | 0.4 | 0.4 | ✅ |  |
| About Us | Information about the company, its mission, values, optionally short team biographies. | 2.00% | 0.4 | 0.4 | ✅ |  |
| Features and Benefits | List of product/service features with icons or graphics. | 3.00% | 0.6 | 0.6 | ✅ |  |
| Customer Reviews | Customer testimonials with photos/logos for greater credibility. | 3.00% | 0.6 | 0.6 | ✅ |  |
| Gallery or Case Studies | Examples of work, projects, or case studies illustrating the company's experience. | 5.00% | 1 | 1 | ✅ |  |
| Contact Form	 | Fields: name, email, message, optionally phone number. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Footer | Contact information, social media links, site map, legal information. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Data Validation | System for validating user input. | 6.00% | 1.2 | 1.2 | ✅ |  |
| Social Media Integration | Ability to share content on social media platforms. | 4.00% | 0.8 | 0.8 | ✅ |  |
| Accessibility | ARIA, color contrast, text readability for people with disabilities. | 4.00% | 0.8 | 0.8 | ✅ |  |
| Multilingual Support | Support for multiple languages and locations. | 4.00% | 0.8 | 0 | ❌ | Didn't attempt |
| Personalization | Customization of content based on user preferences.	 | 3.00% | 0.8 | 0.8 | ✅ |  |

---
## Visual requirements
| Requirement	| Functionality Description		|Maximum Points	| Points Earned by Student	| Completed	| Notes |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| Advanced CSS Selectors| Effective styling using CSS selectors.	 | 0.4 | 0.4 | ✅ |  |
| Pseudo-classes | Defining styles for different element states.	 | 0.2 | 0.2 | ✅ |  |
| CSS Framework| Integration and use (e.g., Bootstrap, Tailwind CSS) for rapid prototyping and UI consistency.	 | 0.4 | 0 | ❌ | Didn't use frameworks |
| Flexbox | Efficient layout, alignment, and space distribution between UI elements.	 | 0.4 | 0.4 | ✅ |  |
| Grid Layout | Creating complex page and app layouts ensuring responsiveness and flexibility. | 0.4 | 0.4 | ✅ |  |
| Responsive Design | Adapting the application to different screen sizes and devices.	 | 0.6 | 0.6 | ✅ |  |
| React Components | Use of built-in React components or components from libraries (e.g., Material-UI, Ant Design).	 | 0.6 | 0 | ❌ | Didn't use a library |
| Visual Appearance of the Application | Overall appearance and aesthetics of the application.	 | 1 | 1 | ✅ |  |

---
## Technical requirements
| Requirement	| Functionality Description		|Maximum Points	| Points Earned by Student	| Completed	| Notes |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| JSX and State | Use of JSX and React state. | 0.2 | 0.2 | ✅ |  |
| useEffect and useLayoutEffect | Use of hooks to manage side effects. | 0.2 | 0.2 | ✅ |  |
| useMemo | Optimization of component rendering. | 0.4 | 0.4 | ✅ |  |
| useRef | Storing references to DOM elements or values between renders. | 0.2 | 0.2 | ✅ |  |
| useReducer | Alternative component state management. | 0.6 | 0.6 | ✅ |  |
| useContext | Global state management in the application. | 0.4 | 0 | ❌ | Didn't use useCOntext |
| useCallback | Optimization of functions dependent on dependencies.	 | 0.4 | 0.4 | ✅ |  |
| Fetching data from API | Use of fetch or a library for data retrieval.	 | 0.6 | 0.6 | ✅ |  |
| Custom Hooki | Defining and using custom hooks in the application. | 0.6 | 0.6 | ✅ |  |
| Formik | Managing forms using Formik. | 0.6 | 0.6 | ✅ |  |
| Universal Components | Creating reusable UI components. | 0.6 | 0.6 | ✅ |  |
| Routing | Implementing routing in the application. | 0.6 | 0.6 | ✅ |  |
| Code Style and Structure | Using promises, functional programming, etc. | 0.6 | 0.6 | ✅ |  |

---
## Additional points
| Description | Maximum point | Points Earned by Student | Compleyted | Notes |
|------|:------------------------------------:|:-----------------------------:|:--------:|-------|
| Use of TypeScript.	 | 2 | 0 | ❌ | Didn't utilise TypeScript |
| Lazy loading of components with React.lazy and Suspense. | 1 | 1 | ✅ | |
| Application testing.	 | 1 | 0 | ❌ | Didn't test the app, only tested user data |
| State management (Context, Redux, MobX). | 2 | 0 | ❌ | Didn't use |
| SWR (Stale-While-Revalidate) or React Query for async data management.	  | 2 | 0 | ❌ | Didn't use |
| Deploying the application on Heroku/Netlify/Firebase.	 | 1 | 1 | ✅ | |
| Other things not covered in lectures/classes.	 | 2 | X | ✅/❌ | |

---
## Mandatory requirements (Minus points for missing these)
| Opis | Punkty utracone przez studenta | Uwagi |
|------|:------------------------------:|-------|
| Project history in the repository.	 | 0 |  |
| Evaluation of commit descriptions.	 | 0 | |
| Repository status.	  | 0 | |

---
