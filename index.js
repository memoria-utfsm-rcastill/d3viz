(async () => {
  let julio = await (await fetch('julio.json')).json();

  let plotlyData = [
    {
      x: [],
      y: [],
      type: 'scatter'
    }
  ];

  // Using for cycle instead of map to avoid multiple iterations
  for (d of julio) {
    plotlyData[0].x.push(d.ts);
    plotlyData[0].y.push(d.julio);
  }

  Plotly.newPlot('julioScatter', plotlyData, {
    yaxis: {
      range: [0, 100]
    }
  });
})()