import { TestBed } from '@angular/core/testing';

import { AtualizarPostsService } from './atualizar-posts.service';

describe('AtualizarPostsService', () => {
  let service: AtualizarPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizarPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
