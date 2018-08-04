import initialize from "@chnn/tube"

export interface AppState {
  count: number
}

const initialState: AppState = { count: 0 }

export const { task, connect } = initialize<AppState>(initialState)
