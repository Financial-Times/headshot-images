# Headshot images [![Build status](https://img.shields.io/circleci/project/Financial-Times/headshot-images.svg)](https://circleci.com/gh/Financial-Times/headshot-images)

An image set of head-shots of FT Journalists for use with bylines.

- [Usage](#usage)
- [Adding or modifying head-shots](#adding-or-modifying-head-shots)
- [Contact](#contact)
- [Licence](#licence)


## Usage

As with all image sets, these are available via the [Image Service](https://www.ft.com/__origami/service/image/v2).

To get an head-shot from the Image Service, use the following URL (replace the `product_source` with your product name and `headshot_name` with the head-shot you want)

`https://www.ft.com/__origami/service/image/v2/images/raw/fthead:{headshot_name}?source={product_source}`

So to get Robert Shrimsley:
`https://www.ft.com/__origami/service/image/v2/images/raw/fthead:robert-shrimsley?source=test`

The source file for these images are all very large, so it's a good idea to pass in the width parameter to get the width you need.

### Getting these head-shots in a different colour/format/size

The Image Service will convert these images on the fly if you pass in the right parameters. To find out more about this, please see the [Image Service documentation](https://www.ft.com/__origami/service/image/v2/docs/api)

## Adding or modifying head-shots

The head-shots are stored in a different git repository in order to keep this repository small in regards to filesize.

Please head over to [head-shot images repository](https://www.example.com) and complete the steps.

Once the image has been added, updated, or removed from the [head-shot images repository](https://www.example.com), follow these steps:

- Clone this repository - `git clone git@github.com:Financial-Times/headshot-images.git && cd headshot-images`
- Create a new branch - `git checkout -b update`
- Install the dependencies - `npm install`
- Build a new `imageset.json` file - `npm run update`
- Push the changes to GitHub - `git push origin update`
- Make a pull-request with the changes - [create pull-request](https://github.com/Financial-Times/headshot-images/compare/update?expand=1)
- Get pull-request reviewed and merged by a member of the Origami team
- Make a GitHub release with a tag in the form of `vX.Y.Z`, where `X`, `Y`, and `Z` are numbers - [create new release](https://github.com/Financial-Times/headshot-images/releases/new)
- There are no more steps

----

## Contact

If you have any questions or comments about this component, or need help using it, please either [raise an issue](https://github.com/Financial-Times/headshot-images/issues), visit [#ft-origami](https://financialtimes.slack.com/messages/ft-origami/) or email [Origami Support](mailto:origami-support@ft.com).

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
