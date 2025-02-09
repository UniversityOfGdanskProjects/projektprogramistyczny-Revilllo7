'use client';
import { useReducer, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/preferences.css';

const initialState = {
    language: 'pl',
    font: 'Arial',
    darkMode: false,
    highContrast: false,
    showLanguageModal: false,
    dropdownVisible: false,
    showOtherModal: false,
    showModal: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FONT':
            return { ...state, font: action.payload };
        case 'TOGGLE_DARK_MODE':
            return { ...state, darkMode: !state.darkMode };
        case 'TOGGLE_HIGH_CONTRAST':
            return { ...state, highContrast: !state.highContrast, darkMode: false };
        case 'TOGGLE_DROPDOWN':
            return { ...state, dropdownVisible: !state.dropdownVisible };
        case 'TOGGLE_OTHER_MODAL':
            return { ...state, showOtherModal: !state.showOtherModal };
        case 'TOGGLE_SHARE_MODAL':
            return { ...state, showModal: !state.showModal };
        default:
            return state;
    }
};

export default function Preferences() {
    const { t } = useTranslation();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const savedFont = localStorage.getItem('preferredFont') || 'Arial';
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        const savedHighContrast = localStorage.getItem('highContrast') === 'true';

        dispatch({ type: 'SET_FONT', payload: savedFont });
        document.body.style.fontFamily = savedFont;

        if (savedDarkMode) {
            dispatch({ type: 'TOGGLE_DARK_MODE' });
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }

        if (savedHighContrast) {
            dispatch({ type: 'TOGGLE_HIGH_CONTRAST' });
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
    }, []);

    const applyDarkMode = (enable) => {
        const rootElement = document.documentElement;
        if (enable) {
            rootElement.classList.add('dark-mode');
        } else {
            rootElement.classList.remove('dark-mode');
        }
    };

    const applyHighContrast = (enable) => {
        const rootElement = document.documentElement;
        if (enable) {
            rootElement.classList.add('high-contrast');
        } else {
            rootElement.classList.remove('high-contrast');
        }
    };

    const changeFont = (font) => {
        dispatch({ type: 'SET_FONT', payload: font });
        document.body.style.fontFamily = font;
        localStorage.setItem('preferredFont', font);
    };

    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
        localStorage.setItem('darkMode', !state.darkMode);
        applyDarkMode(!state.darkMode);
    };

    const toggleHighContrast = () => {
        dispatch({ type: 'TOGGLE_HIGH_CONTRAST' });
        localStorage.setItem('highContrast', !state.highContrast);
        applyHighContrast(!state.highContrast);
        if (!state.highContrast) {
            localStorage.setItem('darkMode', false);
            applyDarkMode(false);
        }
    };

    return (
        <section className="pref-section">

            <div className="preference">
                <button className="button" onClick={() => dispatch({ type: 'TOGGLE_OTHER_MODAL' })}>
                    <img src="images/access.png" alt={t('preferences.img')} />
                </button>
            </div>

            {state.showOtherModal && (
                <div className="modal-overlay" onClick={() => dispatch({ type: 'TOGGLE_OTHER_MODAL' })}>
                    <div className="other-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="font-options">
                            <h2>{t('preferences.fonts')}</h2>
                            {['Arial', 'Comic Sans MS', 'Times New Roman'].map((font) => (
                                <div
                                    key={font}
                                    className={`font-option ${state.font === font ? 'selected' : ''}`}
                                    onClick={() => changeFont(font)}
                                >
                                    {font}
                                </div>
                            ))}
                        </div>

                        <div className="preferences-options">
                            <h3>{t('preferences.dark')}</h3>
                            <label className="switch">
                                <input type="checkbox" checked={state.darkMode || false} onChange={toggleDarkMode} disabled={state.highContrast} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="preferences-options">
                            <h3>{t('preferences.high')}</h3>
                            <label className="switch">
                                <input type="checkbox" checked={state.highContrast || false} onChange={toggleHighContrast} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
