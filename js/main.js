"use strict";
$(window).load(function () {
  $(".loader").delay(500).fadeOut("slow");
}),
  $(document).ready(function () {
    new WOW({ animateClass: "animated", offset: 10, mobile: !0 }).init(),
      $(window).on("scroll", function () {
        $(window).scrollTop() < 100
          ? $(".header").removeClass("sticky_header")
          : $(".header").addClass("sticky_header");
      }),
      $(".counter").counterUp({ delay: 5, time: 3e3 }),
      $(".countdown").countdown("2024/07/04", function (e) {
        $(this).html(
          e.strftime(
            "<div>%w <span>Semanas</span></div>  <div>%D <span>Dias</span></div>  <div>%H<span>Horas</span></div> <div>%M<span>Minutos</span></div> <div>%S<span>Segundos</span></div>"
          )
        );
      }),
      $(".cover_slider").owlCarousel({
        loop: !0,
        autoplay: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !1,
        dots: !0,
        nav: !1,
        items: 1,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        dotsContainer: ".cover_dots",
      }),
      $(".brand_carousel").owlCarousel({
        loop: !0,
        autoplay: !0,
        smartSpeed: 450,
        autoplayHoverPause: !1,
        dots: !1,
        nav: !1,
        responsiveClass: !0,
        responsive: { 0: { items: 2 }, 600: { items: 3 }, 1e3: { items: 5 } },
        items: 5,
      });
    $(".progress_container").waypoint(
      function () {
        $(".progress .progress-bar").progressbar({ transition_delay: 1e3 });
      },
      { offset: "50%" }
    );
    var e = $("#map");
    if (e.length > 0) {
      google.maps.event.addDomListener(window, "load", function () {
        var e = {
            zoom: 16,
            scrollwheel: !1,
            navigationControl: !1,
            mapTypeControl: !1,
            scaleControl: !1,
            center: new google.maps.LatLng(t, s),
            styles: [
              {
                featureType: "water",
                stylers: [
                  { saturation: 43 },
                  { lightness: -11 },
                  { hue: "#0088ff" },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                  { hue: "#ff0000" },
                  { saturation: -100 },
                  { lightness: 99 },
                ],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#808080" }, { lightness: 54 }],
              },
              {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [{ color: "#ece2d9" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#ccdca1" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#767676" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ffffff" }],
              },
              { featureType: "poi", stylers: [{ visibility: "off" }] },
              {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
              },
              { featureType: "poi.park", stylers: [{ visibility: "on" }] },
              {
                featureType: "poi.sports_complex",
                stylers: [{ visibility: "on" }],
              },
              { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
              {
                featureType: "poi.business",
                stylers: [{ visibility: "simplified" }],
              },
            ],
          },
          o = document.getElementById("map"),
          a = new google.maps.Map(o, e);
        new google.maps.Marker({
          position: new google.maps.LatLng(t, s),
          map: a,
          title: "evento!",
        });
      });
      var t = e.attr("data-lat"),
        s = e.attr("data-lon");
    }
  });
