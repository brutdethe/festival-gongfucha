# GongFuCha Festival

Site internet du festival des Thés de culture Chinoise, dont la 2e édition a eu lieu les 23, 24 et 25 juin 2023 au [parc aux bambous](https://parcauxbambous.com) à Lapenne (09)
[https://festival.gongfucha.fr](https://festival.gongfucha.fr)

La 1e édition a eu lieu les 30 septembre, 1er et 2 octobre 2022 au [parc aux bambous](https://parcauxbambous.com) à Lapenne (09)
[https://festival.gongfucha.fr/2022](https://festival.gongfucha.fr/2022)

## Pré-requis

Le site est généré à l'aide de [Jekyll](http://jekyllrb.com/) et nécessite Ruby 2.4.0 (voir `.ruby-version`)

Nous vous recommandons de gérer l'installation de Ruby via [rbenv](http://rbenv.org/).

Sous Mac OS X, vous pouvez utiliser [Homebrew](http://brew.sh/) pour cela
```bash
$ brew install rbenv ruby-build
```

Sous GNU/Linux, certaines librairies sont nécessaires (à adapter à votre gestionnaire de paquets) :
```bash
sudo apt-get install -y libreadline-dev build-essential
```
Puis pour rbenv et ruby-build, préférer une installation par git :
```bash
$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ cd ~/.rbenv && src/configure && make -C src
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

## Installation

Si vous n'avez pas déjà cloné le dépot :
```bash
$ git clone https://github.com/brutdethe/festival-gongfucha.git && cd festival-gongfucha
```
Si bundler n'est pas installé
```bash
$ gem install bundler
```
Pour installer toutes les dépendances du projet :
```bash
$ bundle install;
$ bundle exec rake prebuild:install;
```
Pour installer la bonne version de Ruby avec rbenv :
```bash
$ rbenv install
```

## Travailler en local

Pour travailler sur le site et surveiller les modifications :

```bash
$ bundle exec rake build:serve
```

Pour builder pour le Dév

```bash
$ bundle exec rake build:dev
```

Pour builder pour la Production

```bash
$ bundle exec rake build:prod
```

Si vous modifiez le fichier `_config.yml`, il faut couper et relancer.

Le site est maintenant accessible en local à l'adresse http://127.0.0.1:4000/ (dev).

Pour plus d'information sur l'utilisation de Jekyll, reportez-vous à la [documentation officielle](http://jekyllrb.com/docs/home/).


## Contribution

Pour toute demande, merci de [créer une issue](https://github.com/brutdethe/festival-gongfucha/issues/new) sur GitHub.

Si vous souhaitez nous aider, vous pouvez [copier](https://help.github.com/articles/fork-a-repo/) le dépôt, faire vos modifications dans une nouvelle branche et [faire une demande de fusion](https://github.com/brutdethe/festival-gongfucha/pulls).

Toute modification doit faire l'objet d'une [pull request](https://github.com/brutdethe/festival-gongfucha/pulls) et doit passer les tests avant de pouvoir être fusionnée.

## Tests

Avant de soumettre votre pull-request, vérifiez que les tests passent :

```bash
$ bundle exec rake postbuild:test:kiss
```

## Licence

Ce code est publié sous licence MIT.
