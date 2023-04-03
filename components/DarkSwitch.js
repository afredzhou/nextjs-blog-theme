import React from "react";
const moonIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

const sunIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
);
const ThemeChanger = () => {

    return (
        <div className="flex ">
            <button
                type="button"
                aria-label="Use Dark Mode"
                onClick={() => {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                }}
                className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
            >
                {moonIcon}
            </button>

            <button
                type="button"
                aria-label="Use Light Mode"
                onClick={() => {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }}
                className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
            >
                {sunIcon}
            </button>
        </div>
    );
};

export default ThemeChanger;
