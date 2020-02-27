$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
});

window.addEventListener("load", function(){
  $("#carrousel_oslo").hide();
  $("#carrousel_recife").hide();
  marcaBotao("btn-nova-iorque")
});

$("#btn-nova-iorque").click(function(){
  // inserindo a marcação de clicado no botão de Nova Iorque
  marcaBotao("btn-nova-iorque")

  // mostrando o carrossel do time de Nova Iorque
  mostrarCarrosel("carrousel_nova-iorque");
});

$("#btn-oslo").click(function(){
  // inserindo a marcação de clicado no botão de Oslo
  marcaBotao("btn-oslo")

  // mostrando o carrossel do time de Oslo
  mostrarCarrosel("carrousel_oslo");
});

$("#btn-recife").click(function(){
  // inserindo a marcação de clicado no botão de Recife
  marcaBotao("btn-recife")

  // mostrando o carrossel do time de Recife
  mostrarCarrosel("carrousel_recife");
});

function mostrarCarrosel(carrosselNome) {
  $("#carrousel_nova-iorque").hide();
  $("#carrousel_oslo").hide();
  $("#carrousel_recife").hide();

  $(`#${carrosselNome}`).show();
}

function marcaBotao(botaoNome) {
  $("#btn-nova-iorque").css("background-color", "rgba(255,232,175,0.3)").css("color", "#FFE8AF").css("margin", "0px 8px").css("cursor", "pointer");
  $("#btn-oslo").css("background-color", "rgba(255,232,175,0.3)").css("color", "#FFE8AF").css("margin", "0px 8px").css("cursor", "pointer");
  $("#btn-recife").css("background-color", "rgba(255,232,175,0.3)").css("color", "#FFE8AF").css("margin", "0px 8px").css("cursor", "pointer");

  $(`#${botaoNome}`).css("background-color", "#FFE8AF").css("color", "#24bec6").css("margin", "0px 8px").css("cursor", "pointer");
}