import { getRandomJoke } from '../../../../create-qwik/jokes';
import { note } from '../utils/utils';
import { magenta } from 'kleur/colors';

export async function runJokeCommand() {
  const [setup, punchline] = getRandomJoke();
  note(magenta(`${setup!.trim()}\n${punchline!.trim()}`), '🙈');
}
