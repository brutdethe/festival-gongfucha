---
title: Pour dormir sur place
description: ""
permalink: /dormir-sur-place/
---

<section class="section">
  <div class="wrapper" markdown="1">

# {{ page.title }}
    
<p>
  <p>Le festival se tiendra dans le parc au bambous à 12km de Pamiers :</p>
  <address>Broques<br>09500 Lapenne<br>
    <small>
      (<a href="https://www.openstreetmap.org/directions?from=&to=44.0403%2C3.98892#map=8">ouvrir dans
        OpenStreetMap</a>)
    </small>
  </address>
</p>

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

<!-- 
<div class="grid-3">
  <figure role="group" aria-labelledby="fig1">
    <img src="{{ site.lazyload.placeholder }}" class="lozad"
      data-src="{{ "/assets/images/anduze/val-de-lhort-1-460.jpg" | relative_url }}" alt="Un espace circulant"
      width="460" height="307">
    <figcaption id="fig1" class="text-xs text-center">Un espace circulant</figcaption>
  </figure>
  <figure role="group" aria-labelledby="fig2">
    <img src="{{ site.lazyload.placeholder }}" class="lozad"
      data-src="{{ "/assets/images/anduze/val-de-lhort-2-460.jpg" | relative_url }}"
      alt="Des endroits tranquilles et ombragés" width="460" height="307">
    <figcaption id="fig2" class="text-xs text-center">Des endroits tranquilles et ombragés</figcaption>
  </figure>
  <figure role="group" aria-labelledby="fig3">
    <img src="{{ site.lazyload.placeholder }}" class="lozad"
      data-src="{{ "/assets/images/anduze/val-de-lhort-3-460.jpg" | relative_url }}"
      alt="Accessible, label Tourisme et handicaps" width="460" height="307">
    <figcaption id="fig3" class="text-xs text-center">Accessible, label &laquo;&nbsp;Tourisme et
      handicaps&nbsp;&raquo;</figcaption>
  </figure>
</div>
  </div>
</section>
-->
{% include banners/teahouse.html locale=page.locale %}
