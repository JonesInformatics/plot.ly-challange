function DrawBargraph(sampleId)
{
    console.log(`Calling Draw BarGraph(${sampleId})`);

    d3.json("samples.json").then((data) => {

        var samples =data.samples;
        var resultArray = samples.filter(s=> s.id == sampleId);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks, 
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h",
            marker:{
                color: otu_ids,
                colorscale: "portland",
               
                

            }
        }

        barArray = [barData];
        
        var barLayout = {
                title: "Top Ten",
                margin: {t: 30, 1: 150}

        };

        Plotly.newPlot("bar", barArray, barLayout)
        
    });

}





function DrawBubble(sampleId)

//flesh out draw bubble
{
    console.log(`Calling Bubble(${sampleId})`);

    d3.json("samples.json").then((data) => {

        var samples =data.samples;
        var resultArray = samples.filter(s=> s.id == sampleId);
        var result = resultArray[0];

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks, 
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h",
            marker:{
                color: otu_ids,
                colorscale: "portland",
               
                

            }
        }
  
});


function ShowMetadata(sampleId)
{
   console.log(`CallMeta(${sampleId})`) ;
  
   d3.json("samples.json").then((data) => {

        var metadata =data.metadata;
        var resultArray = metadata.filter( md => md.id == sampleId);
        var result = resultArray[0];


        var PANEL = d3.select("#sample-metadata");

        PANEL.html("");

        // flesh out, java script version of f string

        Object.entries(result).forEach(([key,value]) => {

            var textToShow = "Stuff! " + parseInt(value);
            PANEL.append("h6").text(`${key}: ${value}`);

        });

   });

//    function buildMetadata(sample) {
//     console.log("Build metadata"); 
  
//     // @TODO: Complete the following function that builds the metadata panel
  
//     // Use `d3.json` to fetch the metadata for a sample
//       // Use d3 to select the panel with id of `#sample-metadata`
//       var url = `/metadata/${sample}`;
      
//       d3.json(url).then(function(response) {
//         console.log(response)
//         sample_meta = d3.select("#sample-metadata")
  
//       // Use `.html("") to clear any existing metadata
  
//         sample_meta.html("")
//       // Use `Object.entries` to add each key and value pair to the panel
//         Object.entries(response).forEach(([key, value]) => {
//         sample_meta
//         .append("p")
//         .text(`${key}: ${value}`);
//         });
//       });
//     }


   




function optionChanged(newSampleId)
{
    console.log(`User selected ${newSampleId}`);

    DrawBubble(newSampleId);
    DrawBargraph(newSampleId);
    ShowMetadata(newSampleId);


};

// function InitDashboard()
// {
//     console.log("Initializing Dashboard");

    // var selector = d3.select("#selDataset");

    // d3.json("samples.json").then((data) => {

    //     console.log(data);
    //     //Empty function

    //     var sampleNames = data.names;

    //     sampleNames.forEach((sampleId) => {
    //         selector.append("option")
    //             .text(sampleId)
    //             .property("value", sampleId);


    //     });

    //     var sampleId = sampleNames[0];

    //     DrawBargraph(sampleId);
    //     DrawBubble(sampleId);
    //     ShowMetadata(sampleId);




