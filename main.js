function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');
  
    const object_kiri = {
      kiri_color1: [0.528, 0.960, 0.787], //warna depan
      kiri_color2: [0.144, 0.720, 0.422], //warna samping dan atas
      kiri_color3: [0.123, 0.522, 0.770], //warna nama tengah
  
      /*Kiri*/
      //SISI ATAS
      atas_C: [-0.60999, 0.2004],
      atas_D: [-0.55485, 0.20083],
      atas_E: [-0.67876, -0.07259],
      atas_F: [-0.60133, -0.07422],
      atas_S: [-0.57485, 0.08261],

      //SISI SAMPING
      pinggir_I: [-0.62933, -0.16637],
      pinggir_P: [-0.48531, -0.11392],
      pinggir_O: [-0.3432, -0.16678],
      pinggir_G: [-0.32945, -0.17151],
      pinggir_J: [-0.34268, -0.18556],

      //SISI DEPAN
      depan_K: [-0.5294, -0.01386],
      depan_M: [-0.51779, 0.124],
      depan_N: [-0.43134, 0.07592],
      depan_H: [-0.36096, 0.08629],
      depan_Q: [-0.35039, 0],
      depan_L: [-0.42648, -0.05596],
      depan_R: [-0.45334, 0.14121]

    }
  
    const object_kanan = {
      kanan_color1: [0.528, 0.960, 0.787], //warna depan
      kanan_color2: [0.144, 0.720, 0.422], //warna atas
      kanan_color3: [0.123, 0.522, 0.770], //warna nama tengah

      
      /*Kanan*/
      //SISI ATAS
      atas_V_b: [0.31844, 0.14979],
      atas_W_b: [0.32728, 0.18867],
      atas_Z_b: [0.67545, 0.18573],
      atas_A1_b: [0.69142, 0.14489],
      atas_K1_b: [0.50764, 0.14911],

      //SISI DEPAN
      depan_D1_b: [0.409, 0.0887],
      depan_F1_b: [0.59916, 0.09114],
      depan_H1_b: [0.69485, 0.02166],
      depan_G1_b: [0.6016, -0.03381],
      depan_B1_b: [0.70359, -0.16925],
      depan_J1_b: [0.50837, -0.17634],
      depan_E1_b: [0.40961, -0.03868],
      depan_C1_b: [0.30993, -0.18298],
      depan_I1_b: [0.31487, 0.01859]
    };
  
    const vertices = [
    /*kiri*/
    //atas
    ...object_kiri.atas_C, ...object_kiri.kiri_color2,
    ...object_kiri.atas_E, ...object_kiri.kiri_color2,
    ...object_kiri.atas_F, ...object_kiri.kiri_color2, 

    ...object_kiri.atas_C, ...object_kiri.kiri_color2,
    ...object_kiri.atas_D, ...object_kiri.kiri_color2,
    ...object_kiri.atas_F, ...object_kiri.kiri_color2,///30

    //SAMPING
    ...object_kiri.atas_E, ...object_kiri.kiri_color2,
    ...object_kiri.atas_F, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_I, ...object_kiri.kiri_color2,

    ...object_kiri.atas_F, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_I, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_O, ...object_kiri.kiri_color2,///60

    ...object_kiri.pinggir_I, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_J, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_O, ...object_kiri.kiri_color2, //30

    ...object_kiri.pinggir_J, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_G, ...object_kiri.kiri_color2,
    ...object_kiri.pinggir_O, ...object_kiri.kiri_color2,///90

    //DEPAN
    ...object_kiri.atas_F, ...object_kiri.kiri_color1,
    ...object_kiri.pinggir_P, ...object_kiri.kiri_color1,
    ...object_kiri.depan_K, ...object_kiri.kiri_color1,

    ...object_kiri.atas_F, ...object_kiri.kiri_color1,
    ...object_kiri.depan_K, ...object_kiri.kiri_color1,
    ...object_kiri.atas_S, ...object_kiri.kiri_color1,///120

    ...object_kiri.depan_K, ...object_kiri.kiri_color1,
    ...object_kiri.atas_S, ...object_kiri.kiri_color1,
    ...object_kiri.depan_M, ...object_kiri.kiri_color1,

    ...object_kiri.atas_S, ...object_kiri.kiri_color1,
    ...object_kiri.atas_D, ...object_kiri.kiri_color1,
    ...object_kiri.depan_M, ...object_kiri.kiri_color1,//60 ///150

    ...object_kiri.atas_D, ...object_kiri.kiri_color1,
    ...object_kiri.depan_R, ...object_kiri.kiri_color1,
    ...object_kiri.depan_M, ...object_kiri.kiri_color1,

    ...object_kiri.depan_R, ...object_kiri.kiri_color1,
    ...object_kiri.depan_M, ...object_kiri.kiri_color1,
    ...object_kiri.depan_N, ...object_kiri.kiri_color1,///180

    ...object_kiri.depan_R, ...object_kiri.kiri_color1,
    ...object_kiri.depan_N, ...object_kiri.kiri_color1,
    ...object_kiri.depan_H, ...object_kiri.kiri_color1,

    ...object_kiri.depan_Q, ...object_kiri.kiri_color1,
    ...object_kiri.depan_H, ...object_kiri.kiri_color1,
    ...object_kiri.depan_N, ...object_kiri.kiri_color1,///210
    
    ...object_kiri.depan_Q, ...object_kiri.kiri_color1,
    ...object_kiri.depan_L, ...object_kiri.kiri_color1,
    ...object_kiri.depan_N, ...object_kiri.kiri_color1,//90

    ...object_kiri.depan_Q, ...object_kiri.kiri_color1,
    ...object_kiri.depan_L, ...object_kiri.kiri_color1,
    ...object_kiri.pinggir_G, ...object_kiri.kiri_color1,///240

    ...object_kiri.pinggir_P, ...object_kiri.kiri_color1,
    ...object_kiri.depan_L, ...object_kiri.kiri_color1,
    ...object_kiri.pinggir_G, ...object_kiri.kiri_color1,

    ...object_kiri.pinggir_P, ...object_kiri.kiri_color1,
    ...object_kiri.depan_L, ...object_kiri.kiri_color1,
    ...object_kiri.depan_K, ...object_kiri.kiri_color1,///270

    //KOTAK
    ...object_kiri.depan_M, ...object_kiri.kiri_color3,
    ...object_kiri.depan_L, ...object_kiri.kiri_color3,
    ...object_kiri.depan_K, ...object_kiri.kiri_color3,

    ...object_kiri.depan_M, ...object_kiri.kiri_color3,
    ...object_kiri.depan_L, ...object_kiri.kiri_color3,
    ...object_kiri.depan_N, ...object_kiri.kiri_color3,//120 ///300


    /*KANAN*/
    //ATAS
    ...object_kanan.atas_V_b, ...object_kanan.kanan_color2,
    ...object_kanan.atas_W_b, ...object_kanan.kanan_color2,
    ...object_kanan.atas_A1_b, ...object_kanan.kanan_color2,

    ...object_kanan.atas_W_b, ...object_kanan.kanan_color2,
    ...object_kanan.atas_A1_b, ...object_kanan.kanan_color2,
    ...object_kanan.atas_Z_b, ...object_kanan.kanan_color2, ///330

    //DEPAN
    ...object_kanan.atas_K1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_I1_b, ...object_kanan.kanan_color1,
    ...object_kanan.atas_V_b, ...object_kanan.kanan_color1,

    ...object_kanan.atas_K1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_F1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_D1_b, ...object_kanan.kanan_color1,//150 ///360

    ...object_kanan.atas_K1_b, ...object_kanan.kanan_color1,
    ...object_kanan.atas_A1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_H1_b, ...object_kanan.kanan_color1,

    ...object_kanan.depan_H1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_F1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color1,///390

    ...object_kanan.depan_H1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_B1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color1,

    ...object_kanan.depan_J1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_B1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color1,//410

    ...object_kanan.depan_J1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_E1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color1,//180

    ...object_kanan.depan_J1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_E1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_C1_b, ...object_kanan.kanan_color1,///440
    
    ...object_kanan.depan_I1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_E1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_C1_b, ...object_kanan.kanan_color1,

    ...object_kanan.depan_I1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_E1_b, ...object_kanan.kanan_color1,
    ...object_kanan.depan_D1_b, ...object_kanan.kanan_color1,///470

    //KOTAK
    ...object_kanan.depan_F1_b, ...object_kanan.kanan_color3,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color3,
    ...object_kanan.depan_D1_b, ...object_kanan.kanan_color3,

    ...object_kanan.depan_E1_b, ...object_kanan.kanan_color3,
    ...object_kanan.depan_G1_b, ...object_kanan.kanan_color3,
    ...object_kanan.depan_D1_b, ...object_kanan.kanan_color3,//210//500
  
    ];
  
     var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0058;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (change < -0.8 || change > 0.8) {
            speed = speed * -1;
        }

        for (let i = 301; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 210;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}