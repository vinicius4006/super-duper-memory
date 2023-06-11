export class CardInfo {
  id: number;
  checked: boolean;
  text: string;
  horaTarefa: string;
  diaTarefa: string;
  tag: string;

  constructor(
    id: number,
    checked: boolean,
    text: string,
    horaTarefa: string,
    diaTarefa: string,
    tag: string
  ) {
    this.id = id;
    this.checked = checked;
    this.text = text;
    this.horaTarefa = horaTarefa;
    this.diaTarefa = diaTarefa;
    this.tag = tag;
  }


}
