"use strict";$(document).ready(function(){function a(){document.pointerLockElement===e||document.mozPointerLockElement===e||document.webkitPointerLockElement===e?(d.domElement.addEventListener("mousemove",f,!1),$("p.click").hide(),$("p.rotation").show()):(d.domElement.removeEventListener("mousemove",f,!1),$("p.click").show(),$("p.rotation").hide())}var b=new THREE.Scene,c=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),d=new THREE.WebGLRenderer;d.setSize(window.innerWidth,window.innerHeight),$("body").append(d.domElement);var e=document.querySelector("canvas");e.requestPointerLock=e.requestPointerLock||e.mozRequestPointerLock||e.webkitRequestPointerLock,$("canvas").on("click",function(){e.requestPointerLock()}),document.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.exitPointerLock(),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1);var f=function(a){var b=a.movementX||a.mozMovementX||a.webkitMovementX||0,d=a.movementY||a.mozMovementY||a.webkitMovementY||0;c.rotation.y-=.01*b,c.rotation.x-=.01*d},g=new THREE.SphereGeometry(25,15,15),h=new THREE.MeshBasicMaterial({color:4111166,wireframe:!0}),i=new THREE.Mesh(g,h);b.add(i),c.position.z=50;var j={};addEventListener("keydown",function(a){j[a.keyCode]=!0}),addEventListener("keyup",function(a){delete j[a.keyCode]});var k=function(){requestAnimationFrame(k),$("p.rotation").text(c.rotation.y),37 in j&&(c.position.x-=Math.sin(c.rotation.y+Math.PI/2),c.position.z-=Math.cos(c.rotation.y+Math.PI/2)),38 in j&&(c.position.x+=Math.cos(c.rotation.y+Math.PI/2),c.position.z-=Math.sin(c.rotation.y+Math.PI/2)),39 in j&&(c.position.x+=Math.sin(c.rotation.y+Math.PI/2),c.position.z+=Math.cos(c.rotation.y+Math.PI/2)),40 in j&&(c.position.x-=Math.cos(c.rotation.y+Math.PI/2),c.position.z+=Math.sin(c.rotation.y+Math.PI/2)),d.render(b,c)};k()});