import { CHARACTER, CHARACTER2, CHARACTER3 } from '../features/data/mock.character';
import { CharacterRepo } from '../core/services/repository';
export const mockCharacter1 = CHARACTER;
mockCharacter1.id = '000001';
export const mockCharacter2 = CHARACTER2;
mockCharacter2.id = '000002';
export const mockCharacters = [mockCharacter1, mockCharacter2];
export const mockAddCharacter = CHARACTER3;
mockAddCharacter.id = '000003';
export const mockUpdateCharacter = { ...mockCharacter2, name: 'Update Character' };

export const mockValidRepoResponse = () => {
    (CharacterRepo.prototype.load as jest.Mock).mockResolvedValue(mockCharacters);
    (CharacterRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddCharacter);
    (CharacterRepo.prototype.update as jest.Mock).mockResolvedValue(
        mockUpdateCharacter
    );
    (CharacterRepo.prototype.delete as jest.Mock).mockResolvedValue(mockCharacter1.id);
};

const error = new Error('Testing errors');
export const mockNoValidRepoResponse = () => {
    (CharacterRepo.prototype.load as jest.Mock).mockRejectedValue(error);
    (CharacterRepo.prototype.create as jest.Mock).mockRejectedValue(error);
    (CharacterRepo.prototype.update as jest.Mock).mockRejectedValue(error);
    (CharacterRepo.prototype.delete as jest.Mock).mockRejectedValue(error);
};
