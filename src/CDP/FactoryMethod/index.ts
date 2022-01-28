interface Interviewer {
  askQuestions();
}

class Developer implements Interviewer {
  public askQuestions() {
    console.log("Asking about design patterns!");
  }
}

class CommunityExecutive implements Interviewer {
  public askQuestions() {
    console.log("Asking about community building!");
  }
}

abstract class HiringManager {
  protected abstract makeInterviewer(): Interviewer;

  public takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new Developer();
  }
}

class MarketingManager extends HiringManager {
  protected makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

const margetManager = new MarketingManager();
margetManager.takeInterview();
