---
title: Pour dormir sur place
description: ""
permalink: /dormir-sur-place/
---

<section class="section">
  <div class="wrapper" markdown="1">

# {{ page.title }}
    
<p>
  Cette année, <strong>nous avons choisi l’immersion</strong> pour cultiver le lien et provoquer encore plus
  d’informelles.
  Lisez notre article &laquo;&nbsp;<a href="https://sudweb.fr/blog/2018/un-lieu-plutot-qu-une-ville/">Choisir un
    lieu plutôt qu’une ville</a>&nbsp;&raquo; pour en savoir plus sur cette décision.
  Par conséquent, <strong>l’hébergement est compris dans le prix du billet</strong>.
</p>
<p>
  <a href="http://valdelhort.com/">Le Val de l’Hort</a> nous accueillira du jeudi soir au samedi, en chambres de 3 à
  4 personnes, en dortoir, ou en tente. La réservation du logement se fera au moment de l’inscription et vous
  pourrez évidemment choisir votre chambrée.
  N’hésitez pas à <a href="/contact/" title="Contactez l'équipe de Sud Web">nous faire
    signe</a> pour toute question.
</p>
<p>
  Si toutefois vous préférez vous loger par vos propres moyens, <a
    href="{{ "/alternatives-logement/" | relative_url }}">des alternatives sont disponibles</a>.
</p>
{% if site.tickets.selling %}
<p class="text-center">
  <a class="button" data-text="réserver votre place" href="{{ "/billetterie/" | relative_url }}"
    title="Venir à GongFuCha 2022">
    <span class="button-inner">réserver votre place</span>
  </a>
</p>
{% endif %}
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

{% include banners/teahouse.html locale=page.locale %}
