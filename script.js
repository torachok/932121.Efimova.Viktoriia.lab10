const stageCurtain = document.getElementById('stage-curtain'); 
const stageLamp = document.getElementById('stage-lamp'); 
const stageLight = document.getElementById('stage-light'); 
const stageWizard = document.getElementById('stage-wizard'); 
const stageHat = document.getElementById('stage-hat'); 
const stageRabbit = document.getElementById('stage-rabbit'); 
const stageBird = document.getElementById('stage-bird'); 

stageCurtain.addEventListener('click', function() { 
  this.classList.remove('lift'); 
  this.classList.add('open'); 
}); 

stageCurtain.addEventListener('mouseenter', function() { 
  if (!this.classList.contains('open')) { 
    this.classList.add('lift'); 
  } 
}); 

stageCurtain.addEventListener('mouseleave', function() { 
  if (!this.classList.contains('open')) { 
    this.classList.remove('lift'); 
  } 
}); 

stageLamp.addEventListener('click', function() { 
  if (!stageLight.classList.contains('active')) { 
    stageLight.style.display = 'block'; 

    setTimeout(() => { 
      stageLight.classList.add('active'); 
    }, 10); 
  } else { 
    stageLight.classList.remove('active'); 
  } 
  stageWizard.classList.toggle('on'); 
  stageHat.classList.toggle('on'); 
  stageRabbit.classList.toggle('on'); 
  stageBird.classList.toggle('on'); 
}); 

stageRabbit.addEventListener('click', function() { 
  this.style.transform = 'translateY(15vh)'; 
  stageBird.style.display = 'block'; 
  setTimeout(() => { 
    this.style.display = 'none'; 
    stageBird.style.transform = 'translateY(-15vh)'; 
  }, 500); 
}); 

stageBird.addEventListener('click', function() { 
  this.style.transform = 'translateY(0px)'; 
  stageRabbit.style.display = 'block'; 
  setTimeout(() => { 
    this.style.display = 'none'; 
    stageRabbit.style.transform = 'translateY(0px)'; 
  }, 500); 
});
