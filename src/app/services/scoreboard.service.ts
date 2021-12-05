import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Item } from '../model/Item';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})

export class ScoreboardService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore, private userService: UsersService) {
    this.itemsCollection = this.afs.collection<Item>('scoreboard');
  }

  getScoreboard() {
    return this.itemsCollection.valueChanges()
  }

  async addItem(points: number) {
    let user;
    try {
      user = await this.userService.user$.pipe(take(1)).toPromise()
    } catch (error) {
      console.error(error);
    }

    if (user && user.email) {
      const item: Item = { mail: user?.email ?? null, points }
      try {
        console.log(user.uid)
        await this.itemsCollection.doc(user.uid).set(item);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
