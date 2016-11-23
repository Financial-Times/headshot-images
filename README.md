# Headshot images [![Build status](https://img.shields.io/circleci/project/Financial-Times/headshot-images.svg)](https://circleci.com/gh/Financial-Times/headshot-images)

An image set of head-shots of FT Journalists for use with bylines.

- [Usage](#usage)
- [Adding or modifying headshots](#adding-or-modifying-headshots)
- [Contact](#contact)
- [Licence](#licence)


## Usage

As with all image sets, these are available via the [Image Service](https://www.ft.com/__origami/service/image/v2).

To get an head-shot from the Image Service, use the following URL (replace the `product_source` with your product name and `headshot_name` with the head-shot you want)

`https://www.ft.com/__origami/service/image/v2/images/raw/fthead:{headshot_name}?source={product_source}`

So to get Robert Shrimsley:
`https://www.ft.com/__origami/service/image/v2/images/raw/fthead:robert-shrimsley?source=test`

The source file for these images are all very large, so it's a good idea to pass in the width parameter to get the width you need.

### Getting these headshots in a different colour/format/size

The Image Service will convert these images on the fly if you pass in the right parameters. To find out more about this, please see the [Image Service documentation](https://www.ft.com/__origami/service/image/v2/docs/api)

## Adding or modifying headshots

To keep head-shots consistent, please follow these guidelines:

- Head-shots must be in PNG format
- Head-shots must be cut out against a transparent background
- Head-shots must be square
- Head-shots should be as high quality as possible (the Image Service will resize them for the appropriate use case)
- Head-shots must be named as the person they represent. Filenames must be all lower-case hyphenated.
	- **good**: robert-shrimsley.png, merynn-somerset-webb.png, sarah-o-connor.png
	- **bad**: SarahO'Connor.png, NigelAndrews.png, robertshrimsley.png

**Please do not delete head-shots without talking to the Origami team who will need to manage the deprecation process**

----

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/o-component-boilerplate/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
