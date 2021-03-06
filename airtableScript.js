output.markdown('# Hello');

const token = XXXXXXXX;
const x = await fetch(
  'https://api.github.com/repos/ThomasAndrewMacLean/deurportret/dispatches',
  {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github.everest-preview+json',
      Authorization: 'token ' + token,
    },
    body: JSON.stringify({ event_type: 'rebuild triggered from airtable' }),
  }
);

if (x.status === 204) {
  output.text('Alles is goed gelopen, de website wordt nu gepubliceerd.');
}
