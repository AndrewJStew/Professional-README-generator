// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)
  
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
   ${data.license}

   ## Contribution:
   ${data.contribution}

   ## Testing
   ${data.testing}

   ## Questions
   ${data.testing} 
   
   ## Contact info:
   - GitHub: ${data.github}](https://github.com/${data.github})
   - Email: ${data.email} `;
}

module.exports = generateMarkdown;
