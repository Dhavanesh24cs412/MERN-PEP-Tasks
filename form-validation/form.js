        const form = document.getElementById('myForm');
        const successMessage = document.getElementById('successMessage');

        // Step 1: Define the chronological order of your fields and their specific validation rules
        const steps = [
            {
                id: 'name',
                elements: [document.getElementById('name')],
                errorId: 'nameError',
                validate: () => document.getElementById('name').value.trim() !== ''
            },
            {
                id: 'email',
                elements: [document.getElementById('email')],
                errorId: 'emailError',
                validate: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value.trim())
            },
            {
                id: 'phone',
                elements: [document.getElementById('phone')],
                errorId: 'phoneError',
                validate: () => /^\d{10}$/.test(document.getElementById('phone').value.trim())
            },
            {
                id: 'dob',
                elements: [document.getElementById('dob')],
                errorId: 'dobError',
                validate: () => document.getElementById('dob').value !== ''
            },
            {
                id: 'gender',
                elements: document.querySelectorAll('input[name="gender"]'),
                errorId: 'genderError',
                validate: () => document.querySelector('input[name="gender"]:checked') !== null
            },
            {
                id: 'skills',
                elements: document.querySelectorAll('input[name="skills"]'),
                errorId: 'skillsError',
                validate: () => document.querySelectorAll('input[name="skills"]:checked').length > 0
            },
            {
                id: 'address',
                elements: [document.getElementById('address')],
                errorId: 'addressError',
                validate: () => document.getElementById('address').value.trim() !== ''
            },
            {
                id: 'country',
                elements: [document.getElementById('country')],
                errorId: 'countryError',
                validate: () => document.getElementById('country').value !== ''
            },
            {
                id: 'password',
                elements: [document.getElementById('password')],
                errorId: 'passwordError',
                validate: () => document.getElementById('password').value.length >= 8
            },
            {
                id: 'submit',
                elements: [document.getElementById('submitBtn')],
                errorId: null,
                validate: () => true // The button itself doesn't need validation
            }
        ];

        // Step 2: Helper to turn error styling on/off
        function toggleError(step, show) {
            if (!step.errorId) return;
            document.getElementById(step.errorId).style.display = show ? 'block' : 'none';
            
            step.elements.forEach(el => {
                // Avoid putting red borders on checkbox/radio inputs directly
                if (el.type !== 'radio' && el.type !== 'checkbox' && el.tagName !== 'BUTTON') {
                    if (show) el.classList.add('invalid');
                    else el.classList.remove('invalid');
                }
            });
        }

        // Step 3: Core Logic - Runs continuously as the user interacts with the form
        function checkProgression() {
            let isPreviousValid = true;

            steps.forEach((step) => {
                // Enable or disable based on whether everything before it was valid
                step.elements.forEach(el => el.disabled = !isPreviousValid);

                // If the field is unlocked, check if it's filled out correctly
                if (isPreviousValid) {
                    if (!step.validate()) {
                        isPreviousValid = false; // Stop the chain, lock the remaining inputs below
                    } else {
                        toggleError(step, false); // If it became valid, clear any hanging errors
                    }
                } else {
                    // Reset errors for fields that are locked out
                    toggleError(step, false); 
                }
            });
        }

        // Step 4: Attach listeners to dynamically run the logic
        steps.forEach((step) => {
            step.elements.forEach(el => {
                // On typing or checking a box, see if we can unlock the next step
                el.addEventListener('input', checkProgression);
                el.addEventListener('change', checkProgression);
                
                // Show the error ONLY if the user clicks out of the input and it's invalid
                el.addEventListener('blur', () => {
                    if (!el.disabled && !step.validate()) {
                        toggleError(step, true);
                    }
                });
            });
        });

        // Form submission handles final cleanups 
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            
            // Double check (button is disabled if invalid anyway, but good measure)
            const allValid = steps.every(step => step.validate());
            
            if (allValid) {
                successMessage.style.display = 'block';
                form.reset();
                checkProgression(); // Re-lock everything back to step 1
                setTimeout(() => successMessage.style.display = 'none', 3000); 
            }
        });

        // Initialize: Lock the whole form except the 'Name' input right when the page loads
        checkProgression();