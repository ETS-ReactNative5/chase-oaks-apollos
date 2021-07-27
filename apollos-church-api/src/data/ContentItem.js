import { ContentItem } from '@apollosproject/data-connector-rock';

const { resolver, schema } = ContentItem;

class dataSource extends ContentItem.dataSource {
  attributeIsVideo = ({ key }) =>
    key.toLowerCase().includes('video') || key.toLowerCase().includes('vimeo');
}

export { resolver, schema, dataSource };
