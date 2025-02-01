# Opis projektu i wymagania / Project description and requirements
[english version](#project-description-and-requirements--opis-projektu-i-wymagania)

> Autor: Oliver Gruba
> Grupa: 4
> Data rozpoczęcia: 01/02/2025
> Data ukończenia: XX/02/2025

---

## Temat: Aplikacja muzyczna
### Krótki opis projektu od prowadzącego:

Aplikacja muzyczna, którą tworzymy, jest nowoczesną platformą do odkrywania, słuchania i zarządzania muzyką. Umożliwia użytkownikom logowanie się za pomocą e-maila, hasła lub kont społecznościowych, takich jak Facebook i Google, zapewniając szybki i bezproblemowy dostęp. Po rejestracji, weryfikowanej przez e-mail, użytkownicy mogą przeglądać, wyszukiwać i odtwarzać różnorodne utwory, albumy, artystów i playlisty. Aplikacja oferuje zaawansowane opcje filtrowania wyników wyszukiwania, pozwalając dostosować treści do preferencji użytkownika według kategorii, gatunków muzycznych czy nastroju. Użytkownicy mają możliwość personalizowania swojego doświadczenia muzycznego przez dodawanie ulubionych utworów do biblioteki, tworzenie, edytowanie i usuwanie własnych playlist, a także udostępnianie ich innym. Funkcje odtwarzacza, takie jak odtwarzanie, pauza, przewijanie i regulacja głośności, wzbogacone są o tryb losowy, powtarzanie i zarządzanie kolejką odtwarzania. Aplikacja zapewnia również wizualne i tekstowe uzupełnienia w postaci wyświetlania okładek albumów, tekstów piosenek i informacji o artystach. Użytkownicy mogą dostosować aplikację do swoich potrzeb, wybierając język interfejsu oraz edytując profil, ustawienia prywatności i preferencje powiadomień. Oferujemy również możliwość usunięcia konta dla zapewnienia pełnej kontroli nad danymi osobowymi.


---
## Wymagania funkcjonalne
| Wymóg | Opis funkcjonalności | % funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:-----------------:|:------------------------:|:-----------------------------:|:--------:|-------|
| Skompilowanie i uruchomienie projektu | Zapewnienie dokumentacji i narzędzi niezbędnych do lokalnego skompilowania i uruchomienia projektu. | 1.00% | 0.25 |  |  |  |
| Logowanie | Umożliwienie użytkownikom logowania się za pomocą e-maila i hasła lub poprzez konta społecznościowe, takie jak Facebook czy Google. | 6.00% | 1.5 |  |  |  |
| Wyszukiwanie i odtwarzanie | Funkcje wyszukiwania, przeglądania i odtwarzania utworów, albumów, artystów oraz playlist. | 5.00% | 1.25 |  |  |  |
| Filtrowanie wyników | Możliwość filtrowania wyników wyszukiwania według różnych kryteriów, jak kategorie, gatunki muzyczne czy nastrój. | 5.00% | 1.25 |  |  |  |
| Zarządzanie biblioteką | Dodawanie wybranych utworów do osobistej biblioteki użytkownika. | 5.00% | 1.25 |  |  |  |
| Playlisty | Tworzenie, edycja i usuwanie playlist, jak również dodawanie i usuwanie z nich utworów. | 5.00% | 1.25 |  |  |  |
| Udostępnianie playlist | Funkcja umożliwiająca udostępnianie playlist innym użytkownikom. | 5.00% | 1.25 |  |  |  |
| Kontrola odtwarzania | Odtwarzanie, pauza, przewijanie utworów oraz regulacja głośności. | 5.00% | 1.25 |  |  |  |
| Tryby odtwarzania | Wsparcie dla trybu losowego, powtarzania utworów i zarządzania kolejką odtwarzania. | 5.00% | 1.25 |  |  |  |
| Informacje o utworach | Wyświetlanie okładki albumu, tekstu piosenki oraz informacji o artyście. | 3.00% | 0.75 |  |  |  |
| Edycja profilu | Możliwość edycji profilu użytkownika, ustawień prywatności i preferencji dotyczących powiadomień. | 3.00% | 0.75 |  |  |  |
| Usuwanie konta | Opcja umożliwiająca użytkownikowi trwałe usunięcie swojego konta. | 2.00% | 0.5 |  |  |  |

---
## Wymagania wizualne
| Wymóg | Opis funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| Zaawansowane selektory CSS | Efektywne stylowanie za pomocą selektorów CSS. | 0.5 |  |  |  |
| Pseudoklasy | Definiowanie stylów dla różnych stanów elementów. | 0.25 |  |  |  |
| Framework CSS | Integracja i wykorzystanie (np. Bootstrap, Tailwind CSS) do szybkiego prototypowania i spójności UI. | 0.5 |  |  |  |
| Flexbox | Efektywne układanie, wyrównywanie i dystrybucja przestrzeni między elementami interfejsu. | 0.5 |  |  |  |
| Grid Layout | Tworzenie złożonych układów strony i aplikacji, zapewniających responsywność i elastyczność. | 0.5 | |  |  |
| Responsywny design | Dostosowanie aplikacji do różnych rozmiarów ekranów i urządzeń. | 0.75 |  |  |  |
| Komponenty React | Wykorzystanie wbudowanych komponentów React lub z bibliotek komponentów (np. Material-UI, Ant Design). | 0.75 |  |  |  |
| Wizualny wygląd aplikacji | Ogólny wygląd i estetyka aplikacji. | 1.25 |  |  |  |

---
## Wymagania techniczne
| Wymóg | Opis funkcjonalności | Maksymalna ilość punktów | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| JSX i stany | Użycie JSX i stanów React. | 0.25 |  |  |  |
| useEffect i useLayoutEffect | Wykorzystanie hooków do zarządzania efektami ubocznymi. | 0.25 |  |  |  |
| useMemo | Optymalizacja renderowania komponentów. | 0.5 |  |  |  |
| useRef | Przechowywanie odniesień do elementów DOM lub wartości między renderami. | 0.25 |  |  |  |
| useReducer | Alternatywne zarządzanie stanem komponentu. | 0.75 |  |  |  |
| useContext | Zarządzanie stanem globalnym w aplikacji. | 0.5 |  |  |  |
| useCallback | Optymalizacja funkcji zależnych od zależności. | 0.5 |  |  |  |
| Pobieranie danych z API | Wykorzystanie fetch lub biblioteki do pobierania danych. | 0.75 |  |  |  |
| Własne Hooki | Zdefiniowanie i użycie własnych Hooków w aplikacji. | 0.75 |  |  |  |
| Formik | Zarządzanie formularzami za pomocą Formik. | 0.75 |  |  |  |
| Uniwersalne komponenty | Tworzenie wielokrotnego użytku komponentów UI. | 0.75 |  |  |  |
| Routing | Implementacja routingu w aplikacji. | 0.75 |  |  |  |
| Styl i podział kodu | Stosowanie promise, programowania funkcyjnego itp. | 0.75 |  |  |  |

---
## Punkty dodatkowe
| Opis | Maksymalna ilość punktów do zdobycia | Punkty zdobyte przez studenta | Zrobione | Uwagi |
|------|:------------------------------------:|:-----------------------------:|:--------:|-------|
| Użycie TypeScript. | 2 | | | |
| Leniwe ładowanie komponentów z React.lazy i Suspense. | 1 | | | |
| Przetestowanie aplikacji. | 1 | | | |
| Zarządzanie stanem aplikacji (Context, Redux, MobX) | 2 | | | |
| SWR (Stale-While-Revalidate) lub React Query dla zarządzania danymi asynchronicznymi.  | 2 | | | |
| Deploy aplikacji na przykład w serwisie Heroku/Netlify/Firebase. | 1 | | | |
| Inne rzeczy, nie pokazane na wykładzie/zajęciach. | 2 | | | |

---
## Wymagania obowiazkowe (punkty ujemne za brak)
| Opis | Punkty utracone przez studenta | Uwagi |
|------|:------------------------------:|-------|
| Historia projektu w repozytorium. |  |  |
| Ocena opisu commitów. |  | |
| Stan repozytorium.  |  | |

---
# Project description and requirements / Opis projektu i wymagania
[wersja po polsku](opis-projektu-i-wymagania--project-description-and-requirements)

> Author: Oliver Gruba
> Group: 4
> Start date: 01/02/2025
> Finish date: XX/02/2025

---

## Theme: Music app
### Short project description from the teacher:

The music application we create is a modern platform for discovering, listening and managing music. It allows users to log in with email, password or social accounts such as Facebook and Google for quick and seamless access. After registration, verified by email, users can browse, search and play a variety of songs, albums, artists and playlists. The application offers advanced options for filtering search results, allowing you to adjust the content to the user's preferences by category, music genre or mood. Users can personalize their music experience by adding their favorite songs to their library, creating, editing and deleting their own playlists, and sharing them with others. Player functions such as play, pause, rewind and volume control are enhanced with random mode, repeat and play queue management. The app also provides visual and textual supplements by displaying album covers, lyrics and artist information. Users can customize the app to their needs by selecting the interface language and editing their profile, privacy settings and notification preferences. We also offer the option to delete your account to ensure full control over your personal data.

---
## Functional requirements
| Requirement | Description | % total functionality | Max points | Points scored by student | Finished | Comments |
|-------|----------------------|:-----------------:|:------------------------:|:-----------------------------:|:--------:|-------|
| Compilation and running of the project | Providing documentation and necessary tools for locally compiling and running the project. | 1.00% | 0.25 |  |  |  |
| Login | Enabling users to log in using email and password or via social media accounts such as Facebook or Google. | 6.00% | 1.5 |  |  |  |
| Search and playback | Functions for searching, browsing, and playing tracks, albums, artists, and playlists. | 5.00% | 1.25 |  |  |  |
| Filtering results | Ability to filter search results based on various criteria, such as categories, music genres, or mood. | 5.00% | 1.25 |  |  |  |
| Library management | Adding selected tracks to the user's personal library. | 5.00% | 1.25 |  |  |  |
| Playlists | Creating, editing, and deleting playlists, as well as adding and removing tracks from them. | 5.00% | 1.25 |  |  |  |
| Playlist sharing | A function allowing users to share playlists with others. | 5.00% | 1.25 |  |  |  |
| Playback control | Playing, pausing, skipping tracks, and adjusting volume. | 5.00% | 1.25 |  |  |  |
| Playback modes | Support for shuffle mode, track repeat, and playback queue management. | 5.00% | 1.25 |  |  |  |
| Track information | Displaying album covers, song lyrics, and artist information. | 3.00% | 0.75 |  |  |  |
| Profile editing | Ability to edit user profile, privacy settings, and notification preferences. | 3.00% | 0.75 |  |  |  |
| Account deletion | Option allowing the user to permanently delete their account. | 2.00% | 0.5 |  |  |  |

---
## Visual requirements
| Requirement | Description | Max points | Points scored by student | Finished | Comments |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| Advanced CSS selectors | Effective styling using CSS selectors. | 0.5 |  |  |  |
| Pseudo-classes | Defining styles for different element states. | 0.25 |  |  |  |
| CSS framework | Integration and use (e.g., Bootstrap, Tailwind CSS) for quick prototyping and UI consistency. | 0.5 |  |  |  |
| Flexbox | Effective layout, alignment, and space distribution among interface elements. | 0.5 |  |  |  |
| Grid Layout | Creating complex page and app layouts, ensuring responsiveness and flexibility. | 0.5 |  |  |  |
| Responsive design | Adapting the application to different screen sizes and devices. | 0.75 |  |  |  |
| React components | Using built-in React components or component libraries (e.g., Material-UI, Ant Design) | 0.75 |  |  |  |
| Visual appearance of the application | Overall appearance and aesthetics of the application. | 1.25 |  |  |  |

---
## Technical requirements
| Requirement | Description | Max points | Points scored by student | Finished | Comments |
|-------|----------------------|:------------------------:|:-----------------------------:|:--------:|-------|
| JSX and states | Use of JSX and React states. | 0.25 |  |  |  |
| useEffect and useLayoutEffect | Using hooks to manage side effects. | 0.25 |  |  |  |
| useMemo | Optimising component rendering. | 0.5 |  |  |  |
| useRef | Storing references to DOM elements or values between renders. | 0.25 |  |  |  |
| useReducer | Alternative state management for components. | 0.75 |  |  |  |
| useContext | Managing global application state. | 0.5 |  |  |  |
| useCallback | Optimising functions dependent on dependencies. | 0.5 |  |  |  |
| Fetching data from an API | Using fetch or a library for data retrieval. | 0.75 |  |  |  |
| Custom Hooks | Defining and using custom hooks in the application. | 0.75 |  |  |  |
| Formik | Managing forms using Formik. | 0.75 |  |  |  |
| Reusable components | Creating reusable UI components. | 0.75 |  |  |  |
| Routing | Implementing routing in the application. | 0.75 |  |  |  |
| Code style and structure | Applying promises, functional programming, etc. | 0.75 |  |  |  |

---
## Additional points
| Description | Max points | Points scored by student | Finished | Comments |
|------|:------------------------------------:|:-----------------------------:|:--------:|-------|
| Use of TypeScript. | 2 | | | |
| Lazy loading components with React.lazy and Suspense. | 1 | | | |
| Application testing. | 1 | | | |
| Application state management (Context, Redux, MobX) | 2 | | | |
| SWR (Stale-While-Revalidate) or React Query for asynchronous data management.  | 2 | | | |
| Deploying the application on a service such as Heroku/Netlify/Firebase. | 1 | | | |
| Other functionalities not covered in lectures/classes. | 2 | | | |

---
## Mandatory requirements (minus points for not having them)
| Description | Points lost by the student | Comments |
|------|:------------------------------:|-------|
| Project history in repopository. |  |  |
| Commit description grade. |  | |
| Repository condition.  |  | |

---
