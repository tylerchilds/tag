import { web } from '../../mod.js'
import performItemsRequest from './features/performItemsRequest.js'

export default async function main($, flags) {
  const { itemsContainerUrl } = $.read();

  if(!itemsContainerUrl) {
    const url = await web.createSolidContainer(
      `${flags.user.storageUrl}items/`
    );

    $.write({ itemsContainerUrl: url });
  }

  const items = await performItemsRequest();
  $.write({ items, loading: false });
}
