// consoleModule.js

const styles = {
    info: 'color: blue;',
    warn: 'color: orange;',
    error: 'color: red;',
    success: 'color: green;'
};

let showGeneralLogs = true;

function formatMessage(message, style) {
    return [`%c${message}`, style];
}

export const cm = {
    setShowGeneralLogs: function (show) {
        showGeneralLogs = show;
    },
    l: function (message) {
        if (showGeneralLogs) {
            console.log(message);
        }
    },
    info: function (message) {
        console.log(...formatMessage(message, styles.info));
    },
    warn: function (message) {
        console.warn(...formatMessage(message, styles.warn));
    },
    error: function (message) {
        console.error(...formatMessage(message, styles.error));
    },
    success: function (message) {
        console.log(...formatMessage(message, styles.success));
    }
};