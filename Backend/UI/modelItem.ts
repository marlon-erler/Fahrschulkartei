import UIItem from "./item";

export default async function UIModelItems(getData: () => Promise<[string, string][]>): Promise<string[]> {
    const items: [string, string][] = await getData();
    return items.map(item => {
	const [text, href] = item;
	return UIItem(text, href);
    });
}
