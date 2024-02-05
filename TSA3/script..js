let currentInput = '';
        let currentOperator = '';
        let outputElement = document.getElementById('output');

        function appendNumber(number) {
            if (currentInput.includes('=')) {
                currentInput = '';
            }
            currentInput += number;
            updateOutput();
        }

        function appendOperator(operator) {
            if (currentOperator === '' || currentInput !== '') {
                currentOperator = operator;
                currentInput += ' ' + operator + ' ';
                updateOutput();
            }
        }

        function appendDecimal() {
            if (currentInput.includes('.') || currentInput.includes('=')) {
                return;
            }
            currentInput += '.';
            updateOutput();
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput);
                currentOperator = '';
                updateOutput();
            } catch (error) {
                showError();
            }
        }

        function clearOutput() {
            currentInput = '';
            currentOperator = '';
            updateOutput();
        }

        function backspace() {
            currentInput = currentInput.slice(0, -1);
            updateOutput();
        }

        function updateOutput() {
            outputElement.textContent = currentInput || '0';
        }

        function showError() {
            outputElement.textContent = 'Error';
            setTimeout(clearOutput, 1000);
        }