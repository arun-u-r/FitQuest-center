export const exerciseOptions= {
  method: 'GET',
    headers: {
    'X-RapidAPI-Key':'40ce57eb7emsh0ce493358a1b3dap1e111bjsn4f0d909e62a6',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const youtubeOptions = {
  method: 'GET',
    headers: {
    'X-RapidAPI-Key': '40ce57eb7emsh0ce493358a1b3dap1e111bjsn4f0d909e62a6',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData =async (url, Option)=>{
    const response = await fetch(url, Option)
    const data = await response.json();
    return data;
}