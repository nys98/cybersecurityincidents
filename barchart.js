// Create svg and initial bars

const w = 400;
const h = 300;
const margin = {top: 25, right: 0, bottom: 25,
    left: 25};
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;

//const y_offset = 30;

const bardata = data;

var xScale = d3.scaleBand()
      .domain(bardata.map(d => d.country))
      .range([0, innerWidth])
      .paddingInner(.1);
  
var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata.map(d => d.value))])
    .range([innerHeight, 0])

var xAxis = d3.axisBottom()
    .scale(xScale);

var yAxis = d3.axisLeft()
    .scale(yScale);
    

/*function bar_plot(data) {
  var bardata = data;

  var xScale = d3.scaleBand()
      .domain(bardata.map(d => d.country))
      .range([0, innerWidth])
      .paddingInner(.1);
  
  var yScale = d3.scaleLinear()
      .domain([0, d3.max(bardata.map(d => d.value))])
      .range([innerHeight, 0])
  
  var xAxis = d3.axisBottom()
      .scale(xScale);
  
  var yAxis = d3.axisLeft()
      .scale(yScale);
      
  svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "aliceblue");

  // add bars as a group
  
  const bars = svg.append("g")
      .attr("id", "plot")
      .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .selectAll("rect")
      .data(bardata);
  
  bars.enter().append("rect")
      .attr("x", d => xScale(d.country))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d.value))
      .attr("fill", "lightgreen");
  
  // add axes
  
  svg.append("g")
      .attr("class", "xAxis")
      .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
      .call(xAxis);
  
  svg.append("g")
      .attr("class", "yAxis")
      .attr("transform", `translate (${margin.left}, ${margin.top})`)
      .call(yAxis);
}
*/
    
// add background rectangle
svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "aliceblue");

// add bars as a group

const bars = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
  .selectAll("rect")
    .data(bardata);

bars.enter().append("rect")
    .attr("x", d => xScale(d.country))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d.value))
    .attr("fill", "lightgreen");

// add axes

svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate (${margin.left}, ${h - margin.bottom})`)
    .call(xAxis);

svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate (${margin.left}, ${margin.top})`)
    .call(yAxis);