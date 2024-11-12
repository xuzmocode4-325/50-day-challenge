/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            backgroundImage: {
                foo: 'linear-gradient(to bottom, #ecfccb 0%, #ecfccb 50%, #6ee7b7 50%, #6ee7b7 100%)',
            },
            backgroundSize: {
                'auto-100': 'auto 100%'
            },
            rotate: {
                '-65': '-65deg',
            },
            variants: {
                extend: {
                  rotate: ['peer-rotated'],
                },
            },
            keyframes: {
                'slide-on': {
                    '0%': {
                        transform: 'translateX(0) scale(1)'
                    },
                    '50%': {
                        transform: 'translateX(20px) scale(1.1)'
                    },
                    '100%': {
                        transform: 'translateX(40px) scale(1)'
                    }
                },
                'slide-off': {
                    '0%': {
                        transform: 'translateX(40px) scale(1)'
                    },
                    '50%': {
                        transform: 'translateX(20px) scale(1.1)'
                    },
                    '100%': {
                        transform: 'translateX(0px) scale(1)'
                    }
                }
            },
            animation: {
                'slide-on': 'slide-on 0.3s linear forwards',
                'slide-off': 'slide-off 0.3s linear forwards',
            }
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            mulish: ['Mulish', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            ubuntu: ['Ubuntu', 'sans-serif'],
            matemasie: ['Matemasie', 'sans-serif']
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
