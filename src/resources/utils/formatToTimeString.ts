export const formatToTimeString = (time: number) =>
  new Date(time * 1000).toLocaleTimeString('pt-BR').substring(3);
