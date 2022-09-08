// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license=== 'MIT'){
      return `[![${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
     if (license === 'APACHE 2.0'){
    return `[!${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } 
    if (license === 'GPL 3.0'){
    return `[!${license}](https://img.shields.io/badge/license-${license}-blue.svg)`
    } 
    if (license === 'BSD 3'){
    return `[!${license}](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
    return `No licenses for this Project.`
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `[${license}](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  } 
  if (license === 'APACHE 2.0'){
    return `[${license}](https://choosealicense.com/licenses/apache-2.0/)`
  } 
  if (license === 'GPL 3.0'){
    return `[${license}](https://github.com/Illumina/licenses/blob/master/gpl-3.0.txt)`
  } 
  if (license === 'BSD 3'){
    return `[${license}](https://github.com/teamdigitale/licenses/blob/master/BSD-3-Clause)`
  } else {
    return `No licenses for this Project.`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'none'){
      return `${license} License Info`
    } else {
      return `
      No licenses for this Project.
      `
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents (Optional)

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#Licenses)
  * [Features](#Features)
  * [Contributing](#How-to-Contribute)
  * [Tests](#tests)
  * [Questions](#Questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}
  
  ## Credits

  ${data.credit}

  ## Licenses

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Features

  ${data.feature}

  ## How to Contribute

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions
  
  Reach me at:
  
  [${data.github}](https://github.com/${data.github})
  ${data.email}`;

}

module.exports = generateMarkdown;