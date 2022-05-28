const scene = new THREE.Scene();
// scene.background = new THREE.Color({
//     backgroundColor: 0xffffff,
//     opacity: 0.5,
//     transparent: true,
// });

const camera = new THREE.PerspectiveCamera(
    75,
    250/250,
    0.1,
    1000
);

const canvas = document.querySelector('#threejs');
const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
// renderer.setSize(canvas.innerWidth, canvas.innerHeight);
// renderer.setSize(window.innerWidth, window.innerHeight);


camera.position.z = 1000;
// camera.rotation.z = Math.PI;

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const material2 = new THREE.MeshBasicMaterial({ color: 0xdddddd });
const material3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const material4 = new THREE.MeshBasicMaterial({ color: 0xdddddd });
const material5 = new THREE.MeshBasicMaterial({ color: 0xffffff });
const material_line = new THREE.MeshBasicMaterial({ color: 0x666666});
const material_first = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity:0.5,
    transparent: true,});
const material_second = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity:0.5,
    transparent: true,});
const material_third = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity:0.5,
    transparent: true,});

const x = 0;
const y = 0;
const y_length = 700;
const y_length2 = y_length*0.8;
const y_length3 = y_length*0.6;
const y_length4 = y_length*0.4;
const y_length5 = y_length*0.2;
const y_length_line_out = y_length*1.05;
const y_length_line_in = y_length;
const cos72 = 0.30902;
const sin72 = 0.95106;
const cos54 = 0.58779;
const sin54 = 0.80902;

const shape_line1 = new THREE.Shape();
shape_line1.moveTo(x,y+y_length_line_out);
shape_line1.lineTo(x,y+y_length_line_in);
shape_line1.lineTo(x-sin72*y_length_line_in,y+cos72*y_length_line_in);
shape_line1.lineTo(x-sin72*y_length_line_out,y+cos72*y_length_line_out);

const geometry_line1 = new THREE.ShapeGeometry(shape_line1);
const line1 = new THREE.Mesh( geometry_line1, material_line );
scene.add( line1 );

const shape_line2 = new THREE.Shape();
shape_line2.moveTo(x-sin72*y_length_line_in,y+cos72*y_length_line_in);
shape_line2.lineTo(x-sin72*y_length_line_out,y+cos72*y_length_line_out);
shape_line2.lineTo(x-cos54*y_length_line_out,y-sin54*y_length_line_out);
shape_line2.lineTo(x-cos54*y_length_line_in,y-sin54*y_length_line_in);

const geometry_line2 = new THREE.ShapeGeometry(shape_line2);
const line2 = new THREE.Mesh( geometry_line2, material_line );
scene.add( line2 );

const shape_line3 = new THREE.Shape();
shape_line3.moveTo(x-cos54*y_length_line_out,y-sin54*y_length_line_out);
shape_line3.lineTo(x-cos54*y_length_line_in,y-sin54*y_length_line_in);
shape_line3.lineTo(x+cos54*y_length_line_in,y-sin54*y_length_line_in);
shape_line3.lineTo(x+cos54*y_length_line_out,y-sin54*y_length_line_out);

const geometry_line3 = new THREE.ShapeGeometry(shape_line3);
const line3 = new THREE.Mesh( geometry_line3, material_line );
scene.add( line3 );

const shape_line4 = new THREE.Shape();
shape_line4.moveTo(x+cos54*y_length_line_in,y-sin54*y_length_line_in);
shape_line4.lineTo(x+cos54*y_length_line_out,y-sin54*y_length_line_out);
shape_line4.lineTo(x+sin72*y_length_line_out,y+cos72*y_length_line_out);
shape_line4.lineTo(x+sin72*y_length_line_in,y+cos72*y_length_line_in);

const geometry_line4 = new THREE.ShapeGeometry(shape_line4);
const line4 = new THREE.Mesh( geometry_line4, material_line );
scene.add( line4 );

const shape_line5 = new THREE.Shape();
shape_line5.moveTo(x+sin72*y_length_line_out,y+cos72*y_length_line_out);
shape_line5.lineTo(x+sin72*y_length_line_in,y+cos72*y_length_line_in);
shape_line5.lineTo(x,y+y_length_line_in);
shape_line5.lineTo(x,y+y_length_line_out);

const geometry_line5 = new THREE.ShapeGeometry(shape_line5);
const line5 = new THREE.Mesh( geometry_line5, material_line );
scene.add( line5 );


const points1 = [];
points1.push(new THREE.Vector2(x,y));
points1.push(new THREE.Vector2(x-sin72*y_length,y+cos72*y_length));
const inner_line_geometry1 = new THREE.BufferGeometry().setFromPoints( points1);
const inner_line1 = new THREE.Line( inner_line_geometry1, material_line );
scene.add(inner_line1);

const points2 = [];
points2.push(new THREE.Vector2(x,y));
points2.push(new THREE.Vector2(x-cos54*y_length,y-sin54*y_length));
const inner_line_geometry2 = new THREE.BufferGeometry().setFromPoints( points2);
const inner_line2 = new THREE.Line( inner_line_geometry2, material_line );
scene.add(inner_line2);

const points3 = [];
points3.push(new THREE.Vector2(x,y));
points3.push(new THREE.Vector2(x+cos54*y_length,y-sin54*y_length));
const inner_line_geometry3 = new THREE.BufferGeometry().setFromPoints( points3);
const inner_line3 = new THREE.Line( inner_line_geometry3, material_line );
scene.add(inner_line3);

const points4 = [];
points4.push(new THREE.Vector2(x,y));
points4.push(new THREE.Vector2(x+sin72*y_length,y+cos72*y_length));
const inner_line_geometry4 = new THREE.BufferGeometry().setFromPoints( points4);
const inner_line4 = new THREE.Line( inner_line_geometry4, material_line );
scene.add(inner_line4)

const points5 = [];
points5.push(new THREE.Vector2(x,y));
points5.push(new THREE.Vector2(x,y+y_length));
const inner_line_geometry5 = new THREE.BufferGeometry().setFromPoints( points5);
const inner_line5 = new THREE.Line( inner_line_geometry5, material_line );
scene.add(inner_line5)

const shape = new THREE.Shape();
shape.moveTo(x,y+y_length);
shape.lineTo(x-sin72*y_length,y+cos72*y_length);
shape.lineTo(x-cos54*y_length,y-sin54*y_length);
shape.lineTo(x+cos54*y_length,y-sin54*y_length);
shape.lineTo(x+sin72*y_length,y+cos72*y_length);
shape.moveTo(x,y+y_length);
const geometry = new THREE.ShapeGeometry(shape);
const radar = new THREE.Mesh(geometry,material);
scene.add(radar);

const shape2 = new THREE.Shape();
shape2.moveTo(x,y+y_length2);
shape2.lineTo(x-sin72*y_length2,y+cos72*y_length2);
shape2.lineTo(x-cos54*y_length2,y-sin54*y_length2);
shape2.lineTo(x+cos54*y_length2,y-sin54*y_length2);
shape2.lineTo(x+sin72*y_length2,y+cos72*y_length2);
shape2.moveTo(x,y+y_length2);
const geometry2 = new THREE.ShapeGeometry(shape2);
const radar2 = new THREE.Mesh(geometry2,material2);
scene.add(radar2);

const shape3 = new THREE.Shape();
shape3.moveTo(x,y+y_length3);
shape3.lineTo(x-sin72*y_length3,y+cos72*y_length3);
shape3.lineTo(x-cos54*y_length3,y-sin54*y_length3);
shape3.lineTo(x+cos54*y_length3,y-sin54*y_length3);
shape3.lineTo(x+sin72*y_length3,y+cos72*y_length3);
shape3.moveTo(x,y+y_length3);
const geometry3 = new THREE.ShapeGeometry(shape3);
const radar3 = new THREE.Mesh(geometry3,material3);
scene.add(radar3);

const shape4 = new THREE.Shape();
shape4.moveTo(x,y+y_length4);
shape4.lineTo(x-sin72*y_length4,y+cos72*y_length4);
shape4.lineTo(x-cos54*y_length4,y-sin54*y_length4);
shape4.lineTo(x+cos54*y_length4,y-sin54*y_length4);
shape4.lineTo(x+sin72*y_length4,y+cos72*y_length4);
shape4.moveTo(x,y+y_length4);
const geometry4 = new THREE.ShapeGeometry(shape4);
const radar4 = new THREE.Mesh(geometry4,material4);
scene.add(radar4);

const shape5 = new THREE.Shape();
shape5.moveTo(x,y+y_length5);
shape5.lineTo(x-sin72*y_length5,y+cos72*y_length5);
shape5.lineTo(x-cos54*y_length5,y-sin54*y_length5);
shape5.lineTo(x+cos54*y_length5,y-sin54*y_length5);
shape5.lineTo(x+sin72*y_length5,y+cos72*y_length5);
shape5.moveTo(x,y+y_length5);
const geometry5 = new THREE.ShapeGeometry(shape5);
const radar5 = new THREE.Mesh(geometry5,material5);
scene.add(radar5);
