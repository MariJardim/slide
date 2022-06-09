export default class Slide{
constructor(slide, wrapper){
  this.slide = document.querySelector(slide);
  this.wrapper = document.querySelector(wrapper);
}

onStart(e){
  e.preventDefault();
  e.currentTarget.classList.add('ativo');
  this.wrapper.addEventListener('mousemove', this.onMove)
}
onEnd(e){
  this.wrapper.removeEventListener('mousemove', this.onMove)

}
onMove(e){
}
addSlideEvents(){
  this.wrapper.addEventListener('mousedown', this.onStart);
  this.wrapper.addEventListener('mouseup', this.onEnd);
}
bindEvents(){
  this.onStart = this.onStart.bind(this)
  this.onMove = this.onMove.bind(this)
  this.onEnd = this.onEnd.bind(this)
}
init(){
  this.bindEvents();
  this.addSlideEvents();
  return this;
}
}