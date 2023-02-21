// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

   ## Table of contents
   - [Description] (#description)
   - [Installation] (#installation) 
   - [Usage] (#usage)
   - [Contribution] (#contribution)
   - [Testing] (#testing)
   - [Questions] (#questions)

   ## Description:
   ${data.description}

   ## Installation:
   ${data.installation}

   ## Usage:
   ${data.usage}

   ## License:
   ${data.liscense}

   ## Contribution:
   ${data.contribution}

   ## Testing
   ${data.testing}

   ## Questions
   ${data.testing} `;
}

module.exports = generateMarkdown;
