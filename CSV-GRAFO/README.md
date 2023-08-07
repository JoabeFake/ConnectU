# Gerador de grafos baseado em tabelas CSV.
### Explicação básica de funcionamento.

inicialmente, 4 tipos de arquivos são usados no funcionamento desta ferramenta. Estas são:
- HTML
- CSS
- JavaScript
- CSV

#### O arquivo HTML apresenta a estrutura web do programa, gerando classes, botões containers e inputs.
(você pode conferir inteiramente o arquivo no local "CSV-GRAFO/dist/index.html".)

~~~HTML
    <!DOCTYPE html>
    <html lang="pt-BR" >
    <head>
        <meta charset="UTF-8">
        <title>GRAFO - CONHECIDOS</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="buttons">
        <!-- aqui ficam os botões de interação com o grafo -->
            <button class="nav btn btn-1 btn-sep icon-circular" id="circular">Circular</button>
            <button class="nav btn btn-2 btn-sep icon-grid" id="grid">Grade</button>
            <button class="nav btn btn-3 btn-sep icon-start-force" id="start-force">Fluir</button>
            <button class="nav btn btn-4 btn-sep icon-stop-force" id="stop-force">Parar de Fluir</button>
            <button class="nav btn btn-5 btn-sep icon-clear" id="clear">Limpar</button>
        </div>
        
        <!-- O grafo fica aqui -->
        <div id="graph-container"></div> 

        <div>
            <!-- aqui fica o input pro arquivo csv -->
            <input type="file" id="file" name="file" />
        </div>

        <!-- aqui ficam os links do js -->
        <script src='js/jquery.min.js'></script>
        <script src='js/sigma.min_3.js'></script>
        <script src='js/dat.gui.min.js'></script>
        <script src="js/script.js"></script>
    
    </body>
    </html>
~~~
    
#### O arquivo CSS estiliza a página HTML, você pode estilizar ela como quiser!
(você pode conferir inteiramente o arquivo no local "CSV-GRAFO/dist/css/style.css".)

~~~CSS
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    body {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #graph-container {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      background-color: #dedede;
    }

    /* BOTAO */

    button{
      position:relative;
      z-index:900;
    }

    .btn {
      border: none;
      font-family: 'Poppins', sans-serif;
      font-size: 10px;
      color: inherit;
      background: none;
      cursor: pointer;
      padding: 10px 65px;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
      outline: none;
      position: relative;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
    }

    .btn:after {
      content: '';
      position: absolute;
      z-index: -1;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
    }

    /* Pseudo elements for icons */

    .btn:before {
      font-family: 'FontAwesome';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      position: relative;
      -webkit-font-smoothing: antialiased;
    }


    /* Icon separator */
    .btn-sep {
      padding: 10px 50px 10px 110px;
    }

    .btn-sep:before {
      background: rgba(0, 0, 0, 0.375);
    }

    /* --------------- Botão 1 --------------- */

    .btn-1 {
      background: #072233;
      color: #fff;
    }

    .btn-1:hover {
      background: #061d2b;
    }

    .btn-1:active {
      background: #5a7692;
      top: 2px;
    }

    .btn-1:before {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
    }

    /* --------------- Botão 2 --------------- */

    .btn-2 {
      background: #072233;
      color: #fff;
    }

    .btn-2:hover {
      background: #061d2b;
    }

    .btn-2:active {
      background: #5a7692;
      top: 2px;
    }

    .btn-2:before {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
    }

    /* --------------- Botão 3 --------------- */

    .btn-3 {
      background: #072233;
      color: #fff;
    }

    .btn-3:hover {
      background: #061d2b;
    }

    .btn-3:active {
      background: #5a7692;
      top: 2px;
    }

    .btn-3:before {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
    }

    /* --------------- Botão 4 --------------- */

    .btn-4 {
      background: #072233;
      color: #fff;
    }

    .btn-4:hover {
      background: #061d2b;
    }

    .btn-4:active {
      background: #5a7692;
      top: 2px;
    }

    .btn-4:before {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
    }

    /* --------------- Botão 5 --------------- */

    .btn-5 {
      background: #072233;
      color: #fff;
    }

    .btn-5:hover {
      background: #061d2b;
    }

    .btn-5:active {
      background: #5a7692;
      top: 2px;
    }

    .btn-5:before {
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
    }

    /* --------------- Icones --------------- */

    .icon-circular:before {
      content: "\f200";
      font-family: FontAwesome;
    }

    .icon-grid:before {
      content: "\f55a";
    }

    .icon-start-force:before {
      content: "\f05a";
    }

    .icon-stop-force:before {
      content: "\f1d8";
    }
    .icon-clear:before {
      content: "\f1d8";
    }

    /* Input */

    input{
      position:relative;
      z-index:900;
    }

    h1{
      color: aqua;
      background-color: black;
    }
~~~

#### Os arquivos JavaScript transformam a tabela no grafo e apresentam ao HTML.
(Aqui as coisas complicam um pouco...)

~~~javascript
    var i,
          s,
          o,
          csv_header,
          unique_category_counts,
          step = 0,
          arbitraryCsvFile="csv/teste.csv"; //arquivo a ser lido

    //Função que cria os gráficos
    function createGraph(g){
      if (typeof s != "undefined"){
        s.graph.clear();
        s.refresh()
      }

          s = new sigma({
            graph: g,
            container: 'graph-container',
            type: 'webgl',
            settings: {
              labelThreshold:8,
              animationsTime: 4000,
              skipErrors: false, //mudei, estava true
              //edgeColor:"rgb(255,0,0)",
              //drawEdges:false, <- talvez seja importante depois
              minNodeSize:0,
              maxNodeSize:6,
              autoSettings: true,
        linLogMode: false,
        outboundAttractionDistribution: false,
        adjustSizes: true,
        edgeWeightInfluence: .1,
        scalingRatio: 1,
        strongGravityMode: false,
        gravity: 10,
        jitterTolerance: 2,
        barnesHutOptimize: true,
        barnesHutTheta: 1.2,
        speed: 10,
        outboundAttCompensation: 1,
        totalSwinging: 0,
        totalEffectiveTraction: 0,
        complexIntervals: 500,
        simpleIntervals: 1000,
              //batchEdgesDrawing:true,
    //          webglEdgesBatchSize:1000
            }
          });
      //not sure how to give options to forceatlas2
    /*  s.forceatlas2.options={
      
      };*/
      s.startForceAtlas2();
    }

    //Função que gera o mapa de cores do grafo
    function generateColorMap(list){
      var cmap={};
      var len = list.length;
      for(var i=0;i<len;i++){
        cmap[list[i]] = "#" + (Math.floor(2000000+i*(10777215/len)).toString(16) + '000000').substr(0,6);
      }
      return cmap;
    }

    //gera o círculo
    function generateVertex(name,i,n,columnColorMap,cell_idx,row_idx){
    return {
              id:  name,
              label: name,
              circular_x: 8 * Math.cos(2*Math.PI*i / /*esse numero pode ser importante*/ 8 - Math.PI / 2),
              circular_y: 8 * Math.sin(2*Math.PI*i / /*esse numero pode ser importante*/ 8 - Math.PI / 2),
              circular_size: 4,
              circular_color: columnColorMap[name.split(":")[0]],
              x: i,
              y: Math.floor(i/csv_header.length),
              size: 6,
              color: columnColorMap[name.split(":")[0]],
              grid_x: 10 + (cell_idx*100),
              grid_y: 10 +  (row_idx*10),//Math.floor(n * Math.cos(Math.PI*i / n - Math.PI / 2)),
              grid_size: 4,
              grid_color: columnColorMap[name.split(":")[0]]
            };
    }

    function csv2graph(body){
    
      var rows = body.split(/\r\n|\n/);
      
      var num_rows = rows.length;
      var vtx_cache={};
      var row, cells;
      num_rows = 4; //Número de linhas
      var num_columns = 4; //Número de colunas
      var byrow = rows.slice(0,num_rows);
      csv_header = byrow.shift();
      csv_header = csv_header.split(/\,/).slice(0,num_columns);
      var columnColorMap = generateColorMap(csv_header);
      var length = csv_header.length;
      var vtx_id = 0;
      var edge_id = 0;
      var g = { nodes: [], edges: []}
      // PARA CADA LINHA
      for(var a in byrow){
        cells = byrow[a].split(/\,/).slice(0,num_columns);

        // PARA CADA CÉLULA
        for(var i in cells){
          cell_name_a = csv_header[i]+":"+cells[i];

          //O VÉRTICE É ÚNICO?
          if(typeof vtx_cache[cell_name_a] === "undefined"){
            o = generateVertex(cell_name_a, ++vtx_id, num_rows, columnColorMap, i,a );
            vtx_cache[cell_name_a] = i;

            // apply basic attributes
            g.nodes.push(o);
          }
          // n choose 2 cells in a row
          for(var j=length-1; j > i; j--){ 
            g.edges.push({
              id: 'e'+edge_id++,
              source: cell_name_a,
              target: csv_header[j]+":"+cells[j],
            });
          }   
        }
      }
      return g;
    }

    $('#circular').click(function(){
        s.stopForceAtlas2();
      sigma.plugins.animate(
        s,
        {
          x: 'circular_x',
          y: 'circular_y',
          size: 'circular_size',
          color: 'circular_color'
        }
      );
    });
    $('#grid').click(function(){
      s.stopForceAtlas2();
      sigma.plugins.animate(
        s,
        {
          x: 'grid_x',
          y: 'grid_y',
          size: 'grid_size',
          color: 'grid_color'
        }
      );
    });
    $('#start-force').click(function(){
      s.startForceAtlas2();
    });
    $('#stop-force').click(function(){
      s.stopForceAtlas2();
    });
    $('#clear').click(function(){
      s.graph.clear();
      s.refresh();
    });


    $.get(arbitraryCsvFile,function(body){
      createGraph(csv2graph(body));
    });

    function handleFileSelect(e) {
      if (e.target.files != undefined) {
        var reader = new FileReader();
        reader.onload = function(e) {
          createGraph(csv2graph(e.target.result));
        };
        reader.readAsText(e.target.files.item(0));
      }
    }


    document.getElementById('file').addEventListener('change', handleFileSelect, false);

~~~
