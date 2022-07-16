export default function icon(id, className = "") {
  return `<span class="o-icon o-icon--${id} ${className}"><svg class="o-icon__svg"><use xlink:href="#icon-${id}"></use></svg></span>`;
}
