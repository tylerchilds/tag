function Reader() : Record<string, unknown>
function MergeHandler(state: Record<string, unknown>, payload: Record<string, unknown>) : null
function Render(target: HTMLElement) : string | null
function Styler(styles: string) : null
function EventHandler(event: Record<string, unknown>) : null
function EventDelegator(type: string, selector: string, EventHandler)
function Writer(payload: Record<string, unknown>, MergeHandler) : null

interface Tag {
  selector: string;
  read: Reader;
  render: Render;
  style: Styler;
  on: EventDelegator;
  write: Writer;
}

export function tag(selector: string, initialState: Record<string, unknown>): Tag
