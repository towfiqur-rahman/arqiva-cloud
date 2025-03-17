import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

import Octokit from "octokit";

const octokit = new Octokit({ });

function updateDynamicText() {
  document.getElementById('dynamic-text').innerHTML = document.querySelector("input[name='dynamic-text-field']").value;
  displayDynamicText();
  return false;
}

async function displayDynamicText() {
/*
const value = async () => {
  const response = await fetch('https://api.github.com/repos/towfiqur-rahman/arqiva-cloud/actions/variables/dynamic_text', {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  console.log(await response.json());
};
value();*/
  const response = await octokit.request('GET /repos/{owner}/{repo}/actions/variables', {
    owner: 'towfiqur-rahman',
    repo: 'arqiva-cloud',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  console.log(respose);
  //document.getElementById('dynamic-text').innerHTML = document.querySelector("input[name='dynamic-text-field']").value;

}