import { setDefaultTimeout, setWorldConstructor} from '@cucumber/cucumber';
import { BookWorld } from './worlds/book-store.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(BookWorld);


