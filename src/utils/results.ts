import { FormValues } from '~/components/Form'

export enum ResultLevel {
  None,
  Low,
  Medium,
  High,
}

export const resultMessage: { [result in ResultLevel]: string } = {
  [ResultLevel.None]:
    'Pokud nemáte ani jeden z příznaků, nejedná se pravděpodobně o COVID-19. Průběžně sledujte svůj zdravotní stav a 2x denně si měřte teplotu.',
  [ResultLevel.Low]:
    'Pokud máte pouze horečku po dobu kratší než 2 dny, je nutno brát ohled na sebe i ostatní. ' +
    'Zůstaňte v domácí karanténě, sledujte teplotu a užívejte léky proti horečce.',
  [ResultLevel.Medium]:
    'Kontaktujte telefonicky svého praktického lékaře nebo pohotovost (v případě, že voláte mimo jeho pracovní dobu).',
  [ResultLevel.High]:
    'Volejte ihned linku 155 a postupujte dle instrukcí operátora.',
}

export const getResultLevel = (values: FormValues) => {
  if (values.breathing || (values.fever && values.cough) || values.old) {
    return ResultLevel.High
  } else if (values.fever || values.cough) {
    return ResultLevel.Medium
  } else if (values.fever && !values.longFever) {
    return ResultLevel.Low
  } else {
    return ResultLevel.None
  }
}