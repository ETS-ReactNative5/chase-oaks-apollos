import { ContentItem } from '@apollosproject/data-connector-rock';

const { resolver, schema } = ContentItem;

class dataSource extends ContentItem.dataSource {
  attributeIsVideo = ({ key }) =>
    key.toLowerCase().includes('video') || key.toLowerCase().includes('vimeo');

  getFeatures = async (item) => {
    const features = await super.getFeatures(item);
    const { Feature } = this.context.dataSources;
    if (item.contentChannelId === 23) {
      // sermon channel
      features.push(
        Feature.createHorizontalCardListFeature({
          title: 'Your Next Steps',
          // TODO, just grabs top 5 from one of their existing channels
          algorithms: [
            {
              type: 'CONTENT_FEED',
              arguments: { limit: 5, channelIds: [364] },
            },
          ],
        })
      );
    }
    return features;
  };
}

export { resolver, schema, dataSource };
