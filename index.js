(async () => {
  let julio = await (await fetch('julio.json')).json();
  let rdf = await (await fetch('rdf.json')).json();

  let julioData = [
    {
      x: [],
      y: [],
      type: 'scatter'
    }
  ];

  // Using for cycle instead of map to avoid multiple iterations
  for (d of julio) {
    julioData[0].x.push(d.ts);
    julioData[0].y.push(d.julio);
  }

  Plotly.newPlot('julioScatter', julioData, {
    yaxis: {
      range: [0, 100]
    }
  });

  let rdfData = [
    {
      x: [],
      y: [],
      type: 'scatter'
    }
  ];

  for (d of rdf) {
    rdfData[0].x.push(d.ts);
    rdfData[0].y.push(d.rf);
  }

  Plotly.newPlot('rdfScatter', rdfData, {
    yaxis: {
      range: [0, 1]
    }
  });
})()