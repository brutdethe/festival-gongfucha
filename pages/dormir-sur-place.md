---
title: Pour dormir sur place
description: ""
permalink: /dormir-sur-place/
---

<section class="section">
  <div class="wrapper" markdown="1">

# {{ page.title }}
        
  <p>Le festival se tiendra dans le parc au bambous à 12km de Pamiers :</p>
  <address>Broques<br>09500 Lapenne<br>
    <small>
      (<a href="https://www.openstreetmap.org/directions?from=&to=44.0403%2C3.98892#map=8">ouvrir dans
        OpenStreetMap</a>)
    </small>
  </address>
  <p>Nous vous proposons une petite sélection de lieux pas trop éloignés du parc pour pouvoir profiter pleinement de ces trois jours d'évasion et nous rejoindre dans l'univers des Thés chinois.</p>

<ul>
  <li>à Montaud, chez <a href="https://www.airbnb.fr/rooms/7822320?&check_in=2022-09-29&guests=2&adults=2&check_out=2022-10-02">Arno et Thomas</a></li>
  <li>Les Pujols, chez <a href="https://www.airbnb.fr/rooms/49921647?check_in=2022-09-30&check_out=2022-10-02">Chloé</a>
  </li>
  <li>Les Pujols, chez <a href="https://www.airbnb.fr/rooms/40355162?location=Lapenne%2C%20France&check_in=2022-09-30&check_out=2022-10-02">Jean-philippe</a></li>
  <li>à Belpech, chez <a href="https://www.airbnb.fr/rooms/33306245?check_in=2022-09-30&check_out=2022-10-02">Dominique</a></li>
  <li>à Verniolle, chez <a href="https://www.airbnb.fr/rooms/16133440?check_in=2022-09-30&check_out=2022-10-02">Aurélie</a></li>
</ul>

<ul>
  {% assign specifics = site.data.bnbs.specifics | sort: "distance" %} {% assign generics = site.data.bnbs.generics | sort:
    "fromprice" %} {% for bnb in specifics %}
  <li>
    <a href="{{ bnb.url }}" target="_blank" rel="noopener noreferrer">{{ bnb.name }}{% if bnb.distance %}
      ({{ bnb.distance }} à pied){% endif %} à partir de {{ bnb.fromprice }}
      <span class="sr-only">(open in a new window)</span>
    </a>
  </li>
  {% endfor %}
  {% for bnb in generics %}
  <li>
    <a href="{{ bnb.url }}" target="_blank" rel="noopener noreferrer">{{ bnb.name }}{% if bnb.distance %}
      ({{ bnb.distance }}){% endif %} à partir de {{ bnb.fromprice
            }}
      <span class="sr-only">(open in a new window)</span>
    </a>
  </li>
  {% endfor %}
</ul>

{% if site.tickets.selling %}
<p class="text-center">
  <a class="button" data-text="réserver votre place"
        href="https://boutique.brutdethé.fr/?categorie=Festival"
        title="Venir au parc aux bambous"
        target="_blank">
        <span class="button-inner">réserver votre place</span>
  </a>
</p>
{% endif %}

  </div>
</section>
{% include banners/je-le-potier.html locale=page.locale %}

