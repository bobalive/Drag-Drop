const dragAndRrop = ()=>{
  const card = document.querySelector('.js-card')
  const cell = document.querySelectorAll('.js-cell')

  function dragStart(){
    setTimeout(() => {
      this.classList.add('hide');
    },0)
  }

  function dragEnd(){
      this.classList.remove('hide');
  }
      
    function dragOver(e){
      e.preventDefault();
    }

    function dragEnter(e){
      this.classList.add('hovered')
      e.preventDefault()
    }

    function dragLeave(){
      this.classList.remove('hovered')
    }

    function dragDrop(){
      this.append(card)
      this.classList.remove('hovered')

    }

    cell.forEach((item) => {

      item.addEventListener('dragover', dragOver);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
      item.addEventListener('drop', dragDrop)
    })


   card.addEventListener('dragend', dragEnd)
  card.addEventListener('dragstart', dragStart)
 
}


dragAndRrop()
